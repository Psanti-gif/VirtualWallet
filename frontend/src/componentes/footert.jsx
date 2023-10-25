import React from "react";
import Bancos from '../imagenes/cashless_society_icon_194027.png';

function Footert() {
    return (

        <div class="" > 
            <div class="container justify-content-evenly fixed-bottom" style={{ display: "flex", margin: "0 auto", alignItems: "baseline" }}>
                <div class="row col-8 col-lg-5 " style={{ display: "flex"}}>

                    <div class="col-4 col-lg-4 col-md-4  " style={{ marginTop: "20px", paddingLeft:"20px", minHeight:"20" }}>
                        <div class="card" style={{ width: "23vh;"  }}>
                            <img src={Bancos} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px",paddingLeft:"20px" }}>
                        <div class="card" style={{ width: "10vws;" }}>
                            <img src={Bancos} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col-4 col-lg-4 col-md-4" style={{ marginTop: "20px", paddingLeft:"20px" }}>
                        <div class="card" style={{ width: "23vh;" }}>
                            <img src={Bancos} class="card-img-top" alt="..." />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footert;