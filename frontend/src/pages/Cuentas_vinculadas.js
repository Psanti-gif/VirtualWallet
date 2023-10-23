import React from "react";
import Menu from "../componentes/menu";
import Footer from "../componentes/footer";
import bbva from "../imagenes/bbva.png";
import bancolombia from "../imagenes/bancolombia.jpg";
import daviplata from "../imagenes/daviplata.png";
import avvillas from "../imagenes/av villas.png";
import bancodebogota from "../imagenes/b de bogota.png";
import bancocajasocial from "../imagenes/banco caja social.jpg";
import logo from "../imagenes/icono.png";
import jesid from "../imagenes/jesid.jpg";


function Cuentas_vinculadas() {
    return (
        <div><Menu />
            <div style={{ display: "flex", justifyContent: "space-around", borderRadius: "20px" }}>
                <img src={logo} style={{ display: "flex", width: "30vh", paddingBottom: "40px", paddingTop: "80px" }}></img>


            </div>


            <div style={{ display: "block", padding: "20px", marginTop: "0px" }}><div className="Footer">
                <div class="card text-center" style={{ backgroundColor: "black" }}>
                    <div class="card-header" style={{ color: "white" }}>

                        <div class="container">
                            <div class="row " style={{ display: "flex" }}>
                                <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                        <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bbva} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                        <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bancolombia} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                        <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={daviplata} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <br></br>

                    </div>
                </div>
            </div>
            </div>
            <div style={{ display: "block", padding: "20px", marginTop: "0px" }}><div className="Footer">
                <div class="card text-center" style={{ backgroundColor: "black" }}>
                    <div class="card-header" style={{ color: "white" }}>
                    <div class="container">
                            <div class="row" style={{ display: "flex" }}>
                                <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                        <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={avvillas} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                        <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bancodebogota} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                        <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bancocajasocial} class="card-img-top" alt="..." /></button>
                
                                    </div>
                                    <div> <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2">AÑADIR CUENTAS</button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                <Footer></Footer>
            </div>
        </div>

    );
}

export default Cuentas_vinculadas;