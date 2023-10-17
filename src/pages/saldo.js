  import React from "react";
  import Menu from "../componentes/menu";
  import "../styles/styles.css";
  import Footer from "../componentes/footer";
  import Icono from "../componentes/iconopersona"

  function Saldo() {
    return (
      <div class="bg-dark-dark">
        <Menu />
        <div class="d-flex justify-content-center">
          <Icono/>
        </div>
        
        <section>
          <div class="body">
            .
            <div class="row">
              <div className="col col-md-4 mr-2 ">
                <span className="boton1 card mb-4 mt-2" >
                  <div class="">
                    <div class="card-header">Header</div>
                    <div class="card-body h">
                      <h5 class="card-title">Success card title</h5>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </span>
              </div>

              <div className="col col-md-4">
                <span className="boton2 card mb-4 mt-2" >
                  <div class="">
                    <div class="card-header">Header</div>
                    <div class="card-body h">
                      <h5 class="card-title">Success card title</h5>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </span>
              </div>

              <div className="col col-md-4 mt-2 ">
                <span className="boton3 card mb-4" >
                  <div class="">
                    <div class="card-header">Header</div>
                    <div class="card-body h">
                      <h5 class="card-title">Success card title</h5>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Saldo;
