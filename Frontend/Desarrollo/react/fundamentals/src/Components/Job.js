import React from 'react'

export const Job = (props) => {
    // Componente de practica
  return (
    <>
      <h2>{props.company}</h2>
      <h3>{props.position}</h3>
      <p>${props.salary}.00 MXN</p>
    </>
  );
}
