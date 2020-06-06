import React, { useEffect, useState } from 'react';
import '../../global.css';
import './styles.css';
import api from '../../services/api';
import NumberFormat from 'react-number-format';
import { FormattedNumber, FormattedTime, FormattedDate } from 'react-intl'

const Home = () => {
  const [casos, setcasos] = useState([]);

  useEffect(() => {
    api.get('').then(response => {
      setcasos(response.data);
    })
  }, [casos]);

  return (
    <div>
      <div className="update">
        <h1>COVID Brasil</h1>
        <p>Atualizado em: 06/06/2020 - 18:50</p>
      </div>
      <div id="content">
        <div className="card" id="confirmados">
          <div className="header">
            <p>Confirmados</p>
          </div>
          <div className="container">
            <h4>645.771</h4>
            <p>Total</p>
            <br/>
            <h4>266.940</h4>
            <p>Recuperados</p>
            <br/>
            <h4>343.805</h4>
            <p>Em acompanhamento</p>
          </div>
          <div className="footer">
            <p>Últimas 24 horas</p>
          </div>
          <div className="container" id="new">
            <h4>30.830</h4>
            <p>Novos casos</p>
          </div>
        </div>
        <br/>
        <div className="card" id="obitos">
          <div className="header">
            <p>Óbitos</p>
          </div>
          <div className="container">
            <h4>35.026</h4>
            <p>Total</p>
            <br/>
            <h4>5,4%</h4>
            <p>Letalidade</p>
          </div>
          <div className="footer">
            <p>Últimas 24 horas</p>
          </div>
          <div className="container" id="new">
            <h4>1.005</h4>
            <p>Novos óbitos</p>
          </div>
        </div>
      </div>
      <div className="credit">
        <p>Fonte: Ministério da Saúde</p>
        <p>© Filipe Moreno</p>
      </div>
    </div>
  );
}

export default Home;