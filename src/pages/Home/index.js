import React, { useEffect, useState } from 'react';
import '../../global.css';
import './styles.css';
import api from '../../services/api';
// import api2 from '../../services/api2';

const Home = () => {

  const [confirmados, setconfirmados] = useState('');
  const [obitos, setobitos] = useState('');
  const [geral, setgeral] = useState('');
  // const [otherAPI, setotherAPI] = useState('');

  useEffect(() => {
    api.get('').then(response => {
      setconfirmados(response.data.confirmados);
    })
  }, [confirmados]);

  useEffect(() => {
    api.get('').then(response => {
      setobitos(response.data.obitos);
    })
  }, [obitos]);

  useEffect(() => {
    api.get('').then(response => {
      setgeral(response.data);
    })
  }, [geral]);

  // useEffect(() => {
  //   api2.get('').then(response => {
  //     setotherAPI(response.data);
  //   })
  // }, [otherAPI]);

  return (
    <div>
      <div className="update">
        <h1>COVID Brasil</h1>
        <p>Atualizado em: {geral.dt_updated}</p>
      </div>
      <div id="content">
        <div className="card" id="confirmados">
          <div className="header">
            <p>CONFIRMADOS</p>
          </div>
          <div className="container">
            <h4>{confirmados.total}</h4>
            <p>Total</p>
            <br/>
            <h4>{confirmados.recuperados}</h4>
            <p>Recuperados</p>
            <br/>
            <h4>{confirmados.acompanhamento}</h4>
            <p>Em acompanhamento</p>
          </div>
          <div className="footer">
            <p>ÚLTIMAS 24 HORAS</p>
          </div>
          <div className="container" id="new">
            <h4>{confirmados.novos}</h4>
            <p>Novos casos</p>
          </div>
        </div>
        <br/>
        <div className="card" id="obitos">
          <div className="header">
            <p>ÓBITOS</p>
          </div>
          <div className="container">
            <h4>{obitos.total}</h4>
            <p>Total</p>
            <br/>
            <h4>{obitos.letalidade}%</h4>
            <p>Letalidade</p>
          </div>
          <div className="footer">
            <p>ÚLTIMAS 24 HORAS</p>
          </div>
          <div className="container" id="new">
            <h4>{obitos.novos}</h4>
            <p>Novos óbitos</p>
          </div>
        </div>
      </div>
      <div className="credit">
        <p>Fonte: <a href="https://covid.saude.gov.br/">Ministério da Saúde</a></p>
        <br/>
        <p>© <a href="https://github.com/FilipeMoreno">Filipe Moreno</a></p>
      </div>
    </div>
  );
}

export default Home;