import React, { useEffect, useMemo, useState } from 'react';
import '../../global.css';
import './styles.css';
import api from '../../services/api';
import {format} from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
// import api2 from '../../services/api2';

const Home = () => {

  const [dados, setDados] = useState([]);
  const [obitos, setobitos] = useState('');

  const [date, setDate] = useState(new Date())
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM 'de' yyyy 'às' HH:MM", { locale: pt }),
    [date]
  )
  useEffect(() => {
    api
      .get('')
      .then(response => {
        setDados(response.data)
      })
      .catch(err => {
        console.log('Erro na API', err)
      })
  }, [dados])

  return (
    <div>
      {dados.map(dado => {
            return (
              <div className="update" key="objectId">
              <h1>COVID Brasil</h1>
              <p>Atualizado em: {dateFormatted}</p>
            </div>
            <div id="content">
              <div className="card" id="confirmados">
                <div className="header">
                  <p>CONFIRMADOS</p>
                </div>
                <div className="container">
                  <h4>{dado.confirmados.total}</h4>
                  <p>Total</p>
                  <br/>
                  <h4>{dado.confirmados.recuperados}</h4>
                  <p>Recuperados</p>
                  <br/>
                  <h4>{dado.confirmados.acompanhamento}</h4>
                  <p>Em acompanhamento</p>
                </div>
                <div className="footer">
                  <p>ÚLTIMAS 24 HORAS</p>
                </div>
                <div className="container" id="new">
                  <h4>{dado.confirmados.novos}</h4>
                  <p>Novos casos</p>
                </div>
              </div>
              <br/>
              <div className="card" id="obitos">
                <div className="header">
                  <p>ÓBITOS</p>
                </div>
                <div className="container">
                  <h4>{dado.obitos.total}</h4>
                  <p>Total</p>
                  <br/>
                  <h4>{dado.obitos.letalidade}%</h4>
                  <p>Letalidade</p>
                </div>
                <div className="footer">
                  <p>ÚLTIMAS 24 HORAS</p>
                </div>
                <div className="container" id="new">
                  <h4>{dado.obitos.novos}</h4>
                  <p>Novos óbitos</p>
                </div>
              </div>
            </div>
            )
          })}
      <div className="credit">
        <p>Fonte: <a href="https://covid.saude.gov.br/">Ministério da Saúde</a></p>
        <br/>
        <p>© <a href="https://github.com/FilipeMoreno">Filipe Moreno</a></p>
      </div>
    </div>
  );
}

export default Home;