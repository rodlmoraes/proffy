import { Request, Response } from "express"

import db from "../database"
import convertHourToMinutes from "../utils/convertHourToMinutes"

type ScheduleItem = {
  week_day: 1 | 2 | 3 | 4 | 5 | 6,
  from: string,
  to: string
}

const index = async (req: Request, res: Response) => {
  const { week_day, subject, time } = req.query

  if (!week_day || !subject || !time) {
    return res.status(400).json({
      errors: 'Algum dos filtros de aulas está faltando'
    })
  }

  const timeInMinutes = convertHourToMinutes(time as string)

  const classes = await db('classes')
    .whereExists(function () {
      this.select('class_schedule.id')
        .from('class_schedule')
        .whereRaw('class_schedule.class_id = classes.id')
        .whereRaw('class_schedule.week_day = ??', [Number(week_day)])
        .whereRaw('class_schedule.from <= ??', [timeInMinutes])
        .whereRaw('class_schedule.to > ??', [timeInMinutes])
    })
    .where('classes.subject', 'LIKE', `%${subject}%`)
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*'])

  return res.json(classes)
}

const create = async (req: Request, res: Response) => {
  const {
    name,
    avatar,
    phone,
    bio,
    subject,
    price,
    schedule,
  } = req.body

  const trx = await db.transaction()

  try {
    const insertedUserIds = await trx('users').insert({ name, avatar, phone, bio }, 'id')
    const user_id = insertedUserIds[0]

    const insertedClassIds = await trx('classes').insert({ subject, price, user_id }, 'id')
    const class_id = insertedClassIds[0]

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      const { week_day, from, to } = scheduleItem
      return {
        class_id,
        week_day,
        from: convertHourToMinutes(from),
        to: convertHourToMinutes(to)
      }
    })

    await trx('class_schedule').insert(classSchedule)

    await trx.commit()

    return res.send(201)
  } catch (err) {
    await trx.rollback()

    return res.status(err.status || 400).json({
      error: err.message || 'Ocorreu um erro inesperado'
    })
  }
}

export default { index, create }