import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../services/api';

export default function Cliente() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('INFO');
  const [dataInfo, setDataInfo] = useState([]);
  const [schema, setSchema] = useState({ _id: null , nome: '', email: '', telefone: '', endereco: '' });
  useEffect(() => {
    axios.get(api('cliente'))
      .then(res => {
        setData(res.data);
      })
  });

  const handleChange = event => {
    setSchema({ ...schema, [event.target.name]: event.target.value });
  }

  const resetForm = () => {
    setMode('INFO');
    setSchema({ _id: null , nome: '', email: '', telefone: '', endereco: '' });
  };

  const save = () => {
    axios.post(`${api('cliente')}`, schema)
      .then(res => {
        alert('Cadastrado com sucesso!');
        resetForm();
      })
  };

  const setUpdateCad = (id) => {
    setMode('EDIT');
    setSchema(data.find(item => item._id === id));
  };

  const updateCad = () => {
    axios.put(`${api('cliente')}${schema._id}`, schema)
      .then(res => {
        alert('Atualizado com sucesso!');        
        setMode('INFO');
      })
  };

  const showCad = id => {
    axios.get(`${api('cliente')}${id}`)
      .then(res => {
        setDataInfo(res.data);
      })
  };

  const deleteCad = (id) => {
    axios.delete(`${api('cliente')}${id}`)
      .then(res => {
        alert('Cadastro removido!');
      })
  };

  return (
    <main>
      <div >
        <h2 className="moduleTitle">
          Cliente
        </h2>
      </div>
      <div>
        <div className="infoData">
          <div>
            <i className="material-icons">sentiment_very_satisfied</i>
          </div>
          <div>
            <div className="labelGroup backgroundAnimationColorDark">
              <label>ID</label>
              <p>{dataInfo._id}</p>
            </div>
            <div className="labelGroup backgroundAnimationColorDark">
              <label>Nome</label>
              <p>{dataInfo.nome}</p>
            </div>
            <div className="labelGroup backgroundAnimationColorDark">
              <label>E-mail</label>
              <p>{dataInfo.email}</p>
            </div>
            <div className="labelGroup backgroundAnimationColorDark">
              <label>Endereço</label>
              <p>{dataInfo.endereco}</p>
            </div>
            <div className="labelGroup backgroundAnimationColorDark">
              <label>Telefone</label>
              <p>{dataInfo.telefone}</p>
            </div>
          </div>
        </div>
        <form className="form">
          <div className="formGroup">
            <label>Nome</label>
            <input value={schema.nome} className="inputStyle" placeholder="" name="nome" onChange={handleChange} />
          </div>
          <div className="formGroup">
            <label>E-mail</label>
            <input value={schema.email} className="inputStyle" placeholder="" name="email" onChange={handleChange} />
          </div>
          <div className="formGroup">
            <label>Telefone</label>
            <input value={schema.telefone} className="inputStyle" placeholder="" name="telefone" onChange={handleChange} />
          </div>
          <div className="formGroup">
            <label>Endereço</label>
            <input value={schema.endereco} className="inputStyle" placeholder="" name="endereco" onChange={handleChange} />
          </div>
          {mode === 'INFO' && <button className="btn" type="button" onClick={save}>Salvar</button>}
          {mode === 'EDIT' && <span>
            <button className="btn" type="button" onClick={updateCad}>Alterar</button><span>  </span>  
            <button className="btn" type="button" onClick={resetForm}>Cancelar</button></span>}
        </form>

        <form className="tableFormSearch" >
          <div>
            <input className="inputStyle" placeholder="Procurar" />
            <a href="/" >
              <i className="material-icons">search</i>
            </a>
          </div>
        </form>

        <table className="datatable">
          <thead>
            <tr>
              <th>
                <a href="/"># <i className="material-icons">arrow_downward</i></a>
              </th>
              <th>
                <a href="/">Nome <i className="material-icons">arrow_downward</i></a>
              </th>
              <th>
                <a href="/">E-mail <i className="material-icons">arrow_downward</i></a>
              </th>
              <th>
                <a href="/">Ação<i className="material-icons">arrow_downward</i></a>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index+1}</th>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td className="actions">
                    <button onClick={() => showCad(item._id)} className="transitionScaleIn">
                      <i className="material-icons">info</i>
                      <span className="tooltip">Informações</span></button>
                    <button onClick={() => setUpdateCad(item._id)} className="transitionScaleIn">
                      <i className="material-icons">edit</i>
                      <span className="tooltip">Editar</span></button>
                    <button onClick={() => deleteCad(item._id)} className="transitionScaleIn">
                      <i className="material-icons">delete</i>
                      <span className="tooltip">Excluir</span></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <nav className="paginationTable">
          <ul>
            <li><a href="/"><i className="material-icons">navigate_before</i></a></li>
            <li><a href="/">1</a></li>
            <li><a href="/">2</a></li>
            <li><a href="/">3</a></li>
            <li><a href="/"><i className="material-icons">navigate_next</i></a></li>
          </ul>
        </nav>
      </div>
    </main>
  );
}