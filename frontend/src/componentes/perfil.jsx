import React, { useState, useRef  } from "react";
import "../styles/perfil.css";
import Menu from "./menu";

function Perfil() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    fileInputRef.current.value = "";
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("imagen", selectedImage);

      fetch("/subir-imagen", {
        method: "POST",
        body: formData,
      }).catch((error) => {
        console.error("Error al subir la imagen", error);
      });
    }
  };

  return (
    <div className="body">
      <Menu />
      <div className="page-content page-container " id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                      <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          ref={fileInputRef}
                          onChange={handleImageChange}
                        />
                        {selectedImage ? (
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            className="img-radius"
                            alt="User-Profile-Image"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                          />
                        ) :(
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </div>
                      <h6 className="f-w-600">Hembo Tingor</h6>
                      <p>Web Designer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      <button onClick={handleImageUpload}>Subir Imagen</button>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h6 class="text-muted f-w-400">98979989898</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Projects
                      </h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Recent</p>
                          <h6 class="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Most Viewed</p>
                          <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul class="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                          >
                            <i
                              class="mdi mdi-facebook feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                          >
                            <i
                              class="mdi mdi-twitter feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                          >
                            <i
                              class="mdi mdi-instagram feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i>
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
  );
}

export default Perfil;
