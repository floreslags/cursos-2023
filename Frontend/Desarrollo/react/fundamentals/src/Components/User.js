import React from 'react'

export const User = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </>
  );
}
