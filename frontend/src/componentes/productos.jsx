import React from "react";
import Saldoimg from '../imagenes/cashless_technology_icon_194028.png';
import Bancos from '../imagenes/cashless_society_icon_194027.png';
import Transacciones from '../imagenes/cashless_icon_194058.png';
import Footer from './footer';
import { Link } from "react-router-dom";
function Productos() {
    return (
        <div className='Productos' class="body">
            <div class="card-group">
                <div class="card">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title"> BANCOS VINCULADOS</h5>
                            <p class="card-text">
                                <img src={Bancos} height={"120vh"} style={{ width: "23vh" }} alt="" />
                            </p>
                        </div>
                        <div class="card-footer">
                        <Link to={"/cuentas"}>
                            <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2">Seleccionar</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title"><b style={{ color: "white" }}> .</b> TRANSACCIONES<b style={{ color: "white" }}> .</b> </h5>
                            <p class="card-text">
                                <img src={Saldoimg} height={"120vh"} style={{ width: "23vh" }} alt="" />
                            </p>
                        </div>
                        <div class="card-footer">
                        <Link to={"/transacciones"}>
                            <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2">Seleccionar</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title"><b style={{ color: "white" }}> ...........</b>SALDO<b style={{ color: "white" }}>.........</b></h5>
                            <p class="card-text">
                                <img src={Transacciones} height={"120vh"} style={{ width: "23vh" }} alt="" />
                            </p>
                        </div>
                        <div class="card-footer">
                            <Link to={"/saldo"}>
                                <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2">Seleccionar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>


    );
}

export default Productos;