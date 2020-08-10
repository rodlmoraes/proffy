import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

type TeacherItemProps = {
  teacher: {
    avatar: string,
    bio: string,
    price: number,
    name: string,
    subject: string,
    phone: string,
    user_id: string,
  }
}

export default function TeacherItem({ teacher }: TeacherItemProps) {
  const {
    avatar,
    bio,
    price,
    name,
    subject,
    phone,
    user_id
  } = teacher

  return (
    <article className="techer-item">
      <header>
        <img src={avatar} alt="Avatar" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {price}</strong>
        </p>
        <a rel="noopener noreferrer" target="_blank" onClick={() => createConnection(user_id)} href={`https://wa.me/${phone}`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

const createConnection = (user_id: string) => {
  api.post('connections', { user_id })
}