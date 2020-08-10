import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/select'
import api from '../../services/api'
import './styles.css'

export default function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = (e: FormEvent) => {
    e.preventDefault()

    api.get('classes', {
      params: {
        subject, week_day, time
      }
    }).then(({ data }) => {
      setTeachers(data)
    }).catch(() => alert('Preencha todos os campos'))
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Cubo Mágico', label: 'Cubo Mágico' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={({ target }) => setWeekDay(target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher, index) => (
          <TeacherItem key={index} teacher={teacher} />
        ))}
      </main>
    </div>
  )
}
