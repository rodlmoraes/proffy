import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo'
import landingSvg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import api from '../../services/api'

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(({ data }) => setTotalConnections(data.total))
  })

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <Logo />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingSvg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/estudar" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/dar-aulas" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}
