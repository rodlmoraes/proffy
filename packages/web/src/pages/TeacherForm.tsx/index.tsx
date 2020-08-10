import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/select'
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'
import './styles.css'

export default function TeacherForm() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [price, setPrice] = useState('')

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault()

    api.post('classes', {
      name,
      avatar,
      phone,
      bio,
      subject,
      price: Number(price),
      schedule: scheduleItems
    })
      .then(() => {
        alert('Cadastro realizado com sucesso!')
        history.push('/')
      })
      .catch(() => alert('Erro no cadastro!'))
  }

  const setScheduleItemValue = (index: number, field: string, value: string) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, i) => {
      if (index === i) return { ...scheduleItem, [field]: value }

      return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={({ target }) => setAvatar(target.value)}
            />
            <Input
              name="phone"
              label="Celular"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={({ target }) => setBio(target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
            <Input
              name="price"
              label="Custo da hora aula"
              value={price}
              onChange={({ target }) => setPrice(target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
            </legend>

            {scheduleItems.map(({ week_day, from, to }, index) => (
              <div key={index} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={week_day}
                  onChange={({ target }) => setScheduleItemValue(index, 'week_day', target.value)}
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
                  name="from"
                  label="Das"
                  type="time"
                  value={from}
                  onChange={({ target }) => setScheduleItemValue(index, 'from', target.value)}
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={to}
                  onChange={({ target }) => setScheduleItemValue(index, 'to', target.value)}
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}
