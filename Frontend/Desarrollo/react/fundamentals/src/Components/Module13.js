import React from "react";
import PropTypes from "prop-types";

// Componente hijo
export const Person = ({ name, email, age, isMarried, friends }) => {
  return (
    <>
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      <h4>Age: {age}</h4>
      <p>This person {isMarried ? "is" : "is not"} married.</p>
      {friends.map((friend, key) => (
        <p key={key}>{friend}</p>
      ))}
    </>
  );
};

// Declaracion de propiedades sobre componentes
Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};

// Componente padre
export const Module13 = () => {
  return (
    <div>
      <h2>Module 13 - React Type Safety</h2>
      <Person
        name='Sergio'
        email='sergio@email.com'
        age={30}
        isMarried={false}
        friends={["Blanca", "Brian", "Guadalupe"]}
      />
    </div>
  );
};
