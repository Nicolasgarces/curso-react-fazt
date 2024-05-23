import React from "react";

export function Componente({ name, lastname, age, address={street:'calle', city:"ibague"}, point, gender }) {
  console.log(address);
  return (
    <div>
      <h1>Character</h1>
      <h3>{`Name : ${name}`}</h3>
      <h3>{`LastName : ${lastname}`}</h3>
      <h3>{`Gender : ${gender}`}</h3>
      <h3>{`Age : ${age}`}</h3>
      <h3>Address :</h3>
      <ul>
        <li>{`Street: ${address.street}`}</li>
        <li>{`Ciudad : ${address.city}`}</li>
      </ul>
      <h3>{`Points : ${point}`}</h3>
          </div>
  );
}

export default Componente;
