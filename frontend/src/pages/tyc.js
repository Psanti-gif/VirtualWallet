import React from "react";
import "../styles/styles.css";
import Menu from "../componentes/menu";
import { Link } from "react-router-dom";
import primera from "../imagenes/1ra.png";
import segunda from "../imagenes/2da.png";
import tercera from "../imagenes/3ra.png";
import cuarta from "../imagenes/4ta.png";
import quinta from "../imagenes/5ta.png";
import sexta from "../imagenes/6ta.png";
import septima from "../imagenes/7ma.png";
import octaba from "../imagenes/8ba.png";
import novena from "../imagenes/9na.png";
import decima from "../imagenes/10ma.png";
import onceaba from "../imagenes/11ba.png";

function TyC() {
  return (
    <div className="TyC">
      <br></br>
      <br></br>
      <div class="divss">
        <h2>TÉRMINOS Y CONDICIONES DE USO DE LA BILLETERA VIRTUAL</h2>
      </div>
      <img class="images" src={primera} alt="1 imagen" />
      <br></br>
      <div class="divss">
        <h4 className="Tyc">
          Fecha de última actualización: 04 de agosto de 2023
        </h4>
      </div>
      <br></br>
      <br></br>
      <div>
        <h2>ACEPTACIÓN DE LOS TÉRMINOS</h2>
      </div>
      <img class="images" src={segunda} alt="2 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Al utilizar nuestra Billetera Virtual, usted acepta cumplir con estos
          términos y condiciones. Si no está de acuerdo con estos términos, no
          debe utilizar nuestra Billetera Virtual.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>REGISTRO</h2>
      </div>
      <img class="images" src={tercera} alt="3 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Para utilizar nuestra Billetera Virtual, debe registrarse
          proporcionando una dirección de correo electrónico válida y crear una
          contraseña segura. Usted es responsable de mantener la
          confidencialidad de su cuenta y contraseña.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>USO DEL SERVICIO</h2>
      </div>
      <img class="images" src={cuarta} alt="4 imagen" />
      <br></br>
      <h4 className="Tyc">
        La Billetera Virtual solo puede ser utilizada para realizar
        transacciones legales. No debe utilizarse para fines ilegales o
        malintencionados.
      </h4>
      <br></br>
      <div>
        <h2>SEGURIDAD</h2>
      </div>
      <img class="images" src={quinta} alt="5 imagen" />
      <br></br>
      <h4 className="Tyc">
        Tomamos medidas razonables para proteger su información, pero no podemos
        garantizar la seguridad total de su cuenta. Usted es responsable de
        mantener la seguridad de su cuenta.
      </h4>
      <br></br>
      <div>
        <h2>RESPONSABILIDAD</h2>
      </div>
      <img class="images" src={sexta} alt="6 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          No somos responsables de ninguna pérdida o daño que pueda resultar del
          uso de nuestra Billetera Virtual.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>CAMBIOS EN EL SERVICIO</h2>
      </div>
      <img class="images" src={septima} alt="7 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Nos reservamos el derecho de modificar o interrumpir el servicio en
          cualquier momento sin previo aviso.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>PRIVACIDAD</h2>
      </div>
      <img class="images" src={octaba} alt="8 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Su privacidad es importante para nosotros. Por favor, consulte nuestra
          Política de Privacidad para obtener más información sobre cómo
          recopilamos, usamos y protegemos su información.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>DERECHOS DE PROPIEDAD</h2>
      </div>
      <img class="images" src={novena} alt="9 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Todos los derechos de propiedad intelectual en y para la Billetera
          Virtual son propiedad de nosotros o de nuestros licenciantes.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>TERMINACIÓN</h2>
      </div>
      <img class="images" src={decima} alt="10 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Nos reservamos el derecho de suspender o terminar su acceso a la
          Billetera Virtual en cualquier momento por cualquier motivo.
        </h4>
      </div>
      <br></br>
      <div>
        <h2>LEY APLICABLE</h2>
      </div>
      <img class="images" src={onceaba} alt="11 imagen" />
      <br></br>
      <div>
        <h4 className="Tyc">
          Estos términos se rigen por la ley del país en el que se encuentra
          nuestra empresa. Cualquier disputa relacionada con estos términos será
          resuelta en los tribunales de ese país.
        </h4>
      </div>
      <br></br>
      <div>
        <h4 className="Tyc">
          Al continuar utilizando nuestra Billetera Virtual, usted acepta estos
          términos y condiciones.
        </h4>
      </div>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-secondary text-light">
        <Link to="/" class="text-muted text-decoration-none ">CONTINUAR</Link>
      </button>
      <br></br>
      <br></br>
    </div>
  );
}

export default TyC;
