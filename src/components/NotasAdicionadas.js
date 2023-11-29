import React from 'react';

const NotasAdicionadas = ({ notas }) => {
  return (
    <div>
      <h2>Notas Adicionadas</h2>
      <ul>
        {notas.map((nota, index) => (
          <li key={index}>
            <strong>{nota.titulo}</strong>: {nota.conteudo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotasAdicionadas;