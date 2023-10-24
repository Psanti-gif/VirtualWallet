import React from 'react';
import Menu from '../componentes/menu';
import logo from '../imagenes/icono.png';
import Transacciones from '../imagenes/cashless_icon_194058.png';
import bancoAv from '../imagenes/BancoAV.jpg';
import bancoP from '../imagenes/Bancop.png';
import '../styles/styles1.css';

import bancolombia from '../imagenes/bancolombia.jpg';
import Footer from '../componentes/footer';

function Saldo() {
    return (
        <div><Menu />
        <div style={{display:"flex", justifyContent:"space-around", borderRadius:"20px"}}>
            <img src={logo} style={{display:"flex",width:"30vh",paddingBottom:"40px", paddingTop:"80px"}}></img>


            </div>

            <div style={{ display: "block", marginTop: "60px", width:"50vh", margin:"0 auto"}}>
                <div class="card text-center" style={{ backgroundColor: "#5D4F73" }}>
                    <div class="container">
                        <div class="row " style={{ display: "flex" }}>
                            <div style={{ marginTop: "20px", alignItems:"center"}}>
                                    <p style={{textAlign:"center", color:"white"}}>TU SALDO</p>
      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "block", padding: "20px", marginTop: "20px" }}><div className="Footer">
                <div class="card text-center" style={{ backgroundColor: "black" }}>
                    <div class="card-header" style={{ color: "white" }}>
                        Saldo
                        <div class="container">
                            <div class="row " style={{ display: "flex" }}>
                                <div class="col-6 col-lg-4 col-md-4" style={{ marginTop: "20px",  marginBottom: "10px",padding:"6px" }}>
                                    <div class="card" style={{}}>
                                    <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2" style={{padding:"4px"}}><img src={bancoP} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-6 col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "10px",padding:"6px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                    <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2" style={{padding:"4px"}}><img src={bancoAv} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "10px",padding:"6px"}}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                    <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2" style={{padding:"4px"}}><img src={bancolombia} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <Footer></Footer>
        </div>



    );

}

export default Saldo;