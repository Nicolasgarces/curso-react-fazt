import React from "react";
import ReactDOM from "react-dom/client";
// import Componente from "./Componente";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Button text="Click me"/>
    <Button text="Pay"/>
    <Button text="hey" name = ''/>




    {/* <Componente
      name="Waylon"
      lastname="Smithers"
      age={19}
      address={{
        street: "centro",
        city: "ibague",
      }}
      point={[33.6, 75, 5.23]}
      gender="🏳️‍🌈"
    />
    <Componente /> */}
  </div>
);
