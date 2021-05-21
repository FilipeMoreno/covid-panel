import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format'
import '../../global.css';
import './styles.css';
import api from '../../services/api';

const Home = () => {

  const [confirmados, setconfirmados] = useState('');
  const [obitos, setobitos] = useState('');
  const [geral, setgeral] = useState('');
  const [atualizacao, setAtualizacao] = useState('');

  useEffect(() => {
    api.get().then(response => {
      setconfirmados(response.data.confirmados);
    })
  }, [confirmados]);

  useEffect(() => {
    api.get().then(response => {
      setobitos(response.data.obitos);
    })
  }, [obitos]);

  useEffect(() => {
    api.get().then(response => {
      setgeral(response.data);
    })
  }, [geral]);

  useEffect(() => {
    api.get().then(response => 
      setAtualizacao(Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "long",
        year: "numeric"
      }).format(new Date(response.data.dt_updated))));
  }, [atualizacao]);

  return (
    <div>
      <div className="update">
        <h1>COVID Brasil <img src="https://i.redd.it/bkvfpgdjz3z01.png" alt="Bandeira" height="25" /></h1>
        <p>Atualizado em: {atualizacao}</p>
      </div>
      <div id="content">
        <div className="card" id="confirmados">
          <div className="header">
            <p>CONFIRMADOS</p>
          </div>
          <div className="container">
            <h4><NumberFormat value={confirmados.total} thousandSeparator={true} displayType={'text'} /></h4>
            <p>Total</p>
            <br/>
            <h4><NumberFormat value={confirmados.recuperados} thousandSeparator={true} displayType={'text'} /></h4>
            <p>Recuperados</p>
            <br/>
            <h4><NumberFormat value={confirmados.acompanhamento} thousandSeparator={true} displayType={'text'} /></h4>
            <p>Em acompanhamento</p>
          </div>
          <div className="footer">
            <p>ÚLTIMAS 24 HORAS</p>
          </div>
          <div className="container" id="new">
            <h4><NumberFormat value={confirmados.novos} thousandSeparator={true} displayType={'text'} /></h4>
            <p>Novos casos</p>
          </div>
        </div>
        <br/>
        <div className="card" id="obitos">
          <div className="header">
            <p>ÓBITOS</p>
          </div>
          <div className="container">
            <h4><NumberFormat value={obitos.total} thousandSeparator={true} displayType={'text'} /></h4>
            <p>Total</p>
            <br/>
            <h4><NumberFormat value={obitos.letalidade} thousandSeparator={true} displayType={'text'} />%</h4>
            <p>Letalidade</p>
          </div>
          <div className="footer">
            <p>ÚLTIMAS 24 HORAS</p>
          </div>
          <div className="container" id="new">
            <h4><NumberFormat value={obitos.novos} thousandSeparator={true} displayType={'text'} /></h4>
            <p>Novos óbitos</p>
          </div>
        </div>
        
      </div>
      <div className="credit">
        <p>Fonte: <a href="https://covid.saude.gov.br/">Ministério da Saúde</a></p>
        <p>© <a href="https://github.com/FilipeMoreno">Filipe Moreno - v1.2.1</a></p>
        <br />
      </div>
    </div>
  );
}

export default Home;