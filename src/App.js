import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NotasAdicionadas from './components/NotasAdicionadas';
import NotasExcluidas from './components/NotasExcluidas';

const App = () => {
  const [notas, setNotas] = useState([]);
  const [notasExcluidas, setNotasExcluidas] = useState([]);

  const adicionarNota = (novaNota) => {
    setNotas([...notas, novaNota]);
  };

  const excluirNota = (index) => {
    const notaExcluida = notas.splice(index, 1);
    setNotas([...notas]);
    setNotasExcluidas([...notasExcluidas, ...notaExcluida]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notas">Notas Adicionadas</Link>
            </li>
            <li>
              <Link to="/notas-excluidas">Notas Excluídas</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Home} />
        <Route
          path="/notas"
          render={() => <NotasAdicionadas notas={notas} />}
        />
        <Route
          path="/notas-excluidas"
          render={() => <NotasExcluidas notasExcluidas={notasExcluidas} />}
        />

        {}
        <div>
          <h2>Adicionar Nota</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const titulo = e.target.titulo.value;
              const conteudo = e.target.conteudo.value;
              adicionarNota({ titulo, conteudo });
            }}
          >
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" required />
            <br />
            <label htmlFor="conteudo">Conteúdo:</label>
            <textarea id="conteudo" name="conteudo" required />
            <br />
            <button type="submit">Adicionar Nota</button>
          </form>
        </div>
      </div>
    </Router>
  );
};

export default App;
import './App.css'