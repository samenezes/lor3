import React from 'react';

const NotasExcluidas = ({ notasExcluidas }) => {
  return (
    <div>
      <h2>Notas Excluídas</h2>
      <ul>
        {notasExcluidas.map((nota, index) => (
          <li key={index}>
            <strong>{nota.titulo}</strong>: {nota.conteudo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotasExcluidas;