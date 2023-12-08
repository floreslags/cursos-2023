import React from "react";
import { User } from "./User";
import { Planet } from "./Planet";

export const ConditionalRender = () => {
  const age = 15;
  const isGreen = true;

  const names = ["Ale", "Brian", "Pao", "Sergio"];

  const users = [
    { name: "Ale", age: 24 },
    { name: "Brian", age: 24 },
    { name: "Pao", age: 26 },
    { name: "Sergio", age: 30 },
  ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <>
      {age >= 18 ? <h3>Over age</h3> : <h3>Under age</h3>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This has color</h1>
      {isGreen && <button>My Green Button</button>}
      <h3>Arreglo de nombres</h3>

      {names.map((name, key) => {
        return <p key={key}>{name}</p>;
      })}
      <h3>Objeto de usuarios</h3>
      {users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age} />;
      })}
      <h3>Ejercicio: Planetas</h3>
      <Planet planets={planets}/>
    </>
  );
};
