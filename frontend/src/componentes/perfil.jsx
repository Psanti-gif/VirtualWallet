import React, { useState, useRef } from "react";
import "../styles/perfil.css";
import Menu from "./menu";



function Perfil() {

  

  return (
    <div className="body">
     
      
      <div className="page-content page-container" id="page-content" > 
        <div className="padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-md-12">
                <div className="card user-card-full">
                  <div className="">
                    <div className="col-sm-12 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25">
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h6 className="f-w-600"></h6>
                        <p>Diseñador web</p>
                        <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600" >Information</h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600" >Nombre</p>
                            <h6 className="text-muted f-w-400">Jesid</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Email</p>
                            <h6 className="text-muted f-w-400">jesid4512@gmail.com</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Phone</p>
                            <h6 className="text-muted f-w-400">3026631148</h6>
                          </div>
                        </div>
                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a href="#!" data-toggle="tooltip" data-placement="bottom" title="facebook" data-abc="true">
                              <i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!" data-toggle="tooltip" data-placement="bottom" title="twitter" data-abc="true">
                              <i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#!" data-toggle="tooltip" data-placement="bottom" title="instagram" data-abc="true">
                              <i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Perfil;
