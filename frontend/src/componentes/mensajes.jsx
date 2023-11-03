import React from "react";
import Menu from "./menu";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Twilio } from "twilio";

function Mensajes1() {

  return (
    <div>
      <Menu />
      <Button onClick={sendMessage}>Enviar Mensaje de Texto</Button>
      <p>{messageStatus}</p>
    </div>
  );
}

export default Mensajes1;
