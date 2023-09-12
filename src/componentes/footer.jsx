import React from "react";
import imagen2 from '../imagenes/imagen2.jpg'

function Footer() {
    return (
        <div className="Footer">
            <div class="card text-center">
                <div class="card-header">
                    Creado Por
                    <div class="container">
                        <div class="row " style={{ display: "flex" }}>
                            <div class="col-6 col-lg-4 col-md-4">
                                <div class="card" style={{ width: "100vh;" }}>
                                    <img src={imagen2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-lg-4 col-md-4">
                                <div class="card" style={{ width: "20vh;" }}>
                                    <img src={imagen2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="card" style={{ width: "20vh;" }}>
                                    <img src={imagen2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                    </div>
                                </div>
                            </div>    
                            
                        </div>
                    </div>
                </div>
                <p class="card-text">Virtual Company</p>
            </div>

        </div>

    )
}

export default Footer;