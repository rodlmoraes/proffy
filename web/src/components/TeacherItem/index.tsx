import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

export default function TeacherItem() {
  return (
    <article className="techer-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/51234382?s=460&u=9ee33715e817b0e9a45a7149deffa782a9970df6&v=4" alt="Rodrigo Moraes" />
        <div>
          <strong>Rodrigo Moraes</strong>
          <span>Programação em Ruby</span>
        </div>
      </header>
      <p>
        Deita os cara na porrada no URI e destrói em estruturas de dados.
        <br /><br />
        Vamo mete o loco junto escrevendo muitos códigos e aprender o que a vida tem pra te ensinar, não perca tempo!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}