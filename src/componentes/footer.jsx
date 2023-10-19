import React from "react";
import jesid from '../imagenes/jesid.jpg';
import migue from '../imagenes/miggeee.jpg';
import santi from '../imagenes/santi.jpg';

function Footer() {
    return (
        <div className="Footer">
            <div class="card text-center">
                <div class="card-header">
                    Creado Por
                    <div class="container">
                        <div class="row " style={{ display: "flex" }}>
                            <div class="col-4 col-lg-4 col-md-4"style={{marginTop:"20px"}}>
                                <div class="card" style={{ width: "20vh;" }}>
                                    <img src={migue} class="card-img-top" alt="..." />
                                    <p>Miguel Angel Castro Lopez <br />
                                    (Manager, CGO)</p>
                                </div>
                            </div>
                            <div class="col-4 col-lg-4 col-md-4"style={{marginTop:"20px"}}>
                                <div class="card" style={{ width: "20vh;" }}>
                                    <img src={jesid} class="card-img-top" alt="..." />    
                                    <p>Jesid Lopez Giraldo <br />
                                    (Manager, CGO)</p>
                                </div>
                            </div>
                            <div class="col-4 col-lg-4 col-md-4" style={{marginTop:"20px"}}>
                              <div class="card" style={{ width: "20vh;"}}>
                                    <img src={santi} class="card-img-top" alt="..." />
                                    <p>Santiago Pineda Vargas <br />
                                    (Manager, CGO)</p>
                                </div>
                            </div>    
                            
                        </div>
                    </div>
                </div>
                <p class="card-text" style={{height:"10vh"}}><br /> <b>Virtual Company </b></p>
            </div>

        </div>

    )
}

export default Footer;