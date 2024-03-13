import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { loadFull } from "tsparticles";
import "./App.css";
import Particle from "./Components/particles";
import "./Components/pokemon.css";

import "./Components/Modal.css";
// "https://jacobgurung.com/Gurung,Jacob Riyoja.docx";
 // "https://idyllic-faloodeh-476f84.netlify.app/Gurung,Jacob Riyoja.docx";
const csv_url =
 "https://jacobgurung.com/Gurung,Jacob Riyoja.docx";

function App() {
  const downloadFileURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const modal = document.querySelector("#modal");
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");

  if (modal) {
    openModal && openModal.addEventListener("click", () => modal.showModal());

    closeModal && closeModal.addEventListener("click", () => modal.close());
  }

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <body>
      <div className="App">
        <Particle />
      </div>
      {/* <p style={{color:"white"}}>HELLO</p> */}
      <div className="h1">
        <div className="box">
          <center>
            <p className="pkmn-text">WELCOME TO MY PORTFOLIO</p>

            {/* This is for the Education section  */}
            <p>
              <Popup
                trigger={<button className="button"> Education </button>}
                modal
                nested
              >
                {(close) => (
                  <div className="pkmn-text">
                    <center>
                    <h1>Hang Seng University of Hong Kong 香港恒生大學</h1>
                    <a
                      href="https://www.hsu.edu.hk/wp-content/uploads/2021/07/HSUHK-Pamphlet_Jul-2021_BA-AHCC_single.pdf"
                      target="_blank"
                    >
                      <p className="button">
                        Bachelor of Arts(Honours) in APPLIED AND HUMAN-CENTRED
                        COMPUTING(BA-AHCC)
                      </p>
                    </a>
                    <h1>
                      The HKU School of Professional and Continuing Education
                      (HKU SPACE)
                    </h1>
                    <a
                      href="https://www2.hkuspace.hku.hk/cc/higher-diploma/higher-diploma-in-data-science"
                      target="_blank"
                    >
                      <p className="button">Higher Diploma in Data Science</p>
                    </a>
                    </center>
                  </div>
                  
                )}
              </Popup>
            </p>

            {/* This part is for the Resume section */}
            <p>
              <button
                className="button"
                onClick={() => {
                  downloadFileURL(csv_url);
                }}
              >
                Resume
              </button>
            </p>

            {/* This part for Projects */}
            <p>
              <Popup
                trigger={<button className="button"> Contacts </button>}
                modal
                nested
              >
                {(close) => (
                  <div className="pkmn-text">
                    <center>
                      <a href="https://github.com/Jacobgrg" target="_blank">
                        <img
                          src={require("./Components/Github.png")}
                          height={100}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jacob-riyoja-gurung-1799aa158"
                        target="_blank"
                      >
                        <img
                          src={require("./Components/link.png")}
                          height={100}
                        />
                      </a>
                      <Popup
                        trigger={
                          <img
                            src={require("./Components/Mail.png")}
                            height={100}
                          />
                        }
                        modal
                        nested
                      >
                        {(close) => (
                          <div className="normal">
                            <center><p>jacobgurung@gmail.com</p></center></div>
                         
                         
                        )}
                      </Popup>
                    </center>
                  </div>
                )}
              </Popup>
            </p>
          </center>
        </div>
      </div>
    </body>
  );
}

export default App;
