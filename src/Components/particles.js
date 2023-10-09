
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

 function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={
        {
            fullScreen: {
                "enable": true,
            "zIndex": -1
            },
            fpsLimit: 60,
            particles: {
              groups: {
                z5000: {
                  number: {
                    value: 70
                  },
                  zIndex: {
                    value: 5000
                  }
                },
                z7500: {
                  number: {
                    value: 30
                  },
                  zIndex: {
                    value: 75
                  }
                },
                z2500: {
                  number: {
                    value: 50
                  },
                  zIndex: {
                    value: 25
                  }
                },
                z1000: {
                  number: {
                    value: 40
                  },
                  zIndex: {
                    value: 10
                  }
                }
              },
              number: {
                value: 200,
                density: {
                  enable: false,
                  value_area: 800
                }
              },
              color: {
                value: "#fff",
                animation: {
                  enable: false,
                  speed: 20,
                  sync: true
                }
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 1,
                random: false,
                animation: {
                  enable: false,
                  speed: 3,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3
              },
              links: {
                enable: false,
                distance: 100,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                angle: {
                  value: 10,
                  offset: 0
                },
                enable: true,
                speed: 5,
                direction: "right",
                random: false,
                straight: true,
                outModes: {
                  default: "out"
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              zIndex: {
                value: 5,
                opacityRate: 0.5
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: false,
                  mode: "repulse"
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8
                },
                repulse: {
                  distance: 200
                },
                push: {
                  quantity: 4,
                  groups: ["z5000", "z7500", "z2500", "z1000"]
                },
                remove: {
                  quantity: 2
                }
              }
            },
            detectRetina: true,
            background: {
              color: "#000000",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            },
            emitters: {
              position: {
                y: 55,
                x: -30
              },
              rate: {
                delay: 7,
                quantity: 1
              },
              size: {
                width: 0,
                height: 0
              },
              particles: {
                shape: {
                  type: "images",
                  options: {
                    images: [
                      {
                        src: "https://particles.js.org/images/amongus_blue.png",
                        width: 205,
                        height: 267
                      },
                      {
                        src: "https://particles.js.org/images/amongus_cyan.png",
                        width: 207,
                        height: 265
                      },
                      {
                        src: "https://particles.js.org/images/amongus_green.png",
                        width: 204,
                        height: 266
                      },
                      {
                        src: "https://particles.js.org/images/amongus_lime.png",
                        width: 206,
                        height: 267
                      },
                      {
                        src: "https://particles.js.org/images/amongus_orange.png",
                        width: 205,
                        height: 265
                      },
                      {
                        src: "https://particles.js.org/images/amongus_pink.png",
                        width: 205,
                        height: 265
                      },
                      {
                        src: "https://particles.js.org/images/amongus_red.png",
                        width: 204,
                        height: 267
                      },
                      {
                        src: "https://particles.js.org/images/amongus_white.png",
                        width: 205,
                        height: 267
                      }
                    ]
                  }
                },
                size: {
                  value: 40
                },
                move: {
                  speed: 10,
                  outModes: {
                    default: "destroy",
                    left: "none"
                  },
                  straight: true
                },
                zIndex: {
                  value: 0
                },
                rotate: {
                  value: {
                    min: 0,
                    max: 360
                  },
                  animation: {
                    enable: true,
                    speed: 10,
                    sync: true
                  }
                }
              }
            }
          }

      }

     

    //   options={{
    //     "fullScreen": {
    //         "enable": true,
    //         "zIndex": -1
    //     },
    //     "particles": {
    //         "number": {
    //             "value": 10,
    //             "density": {
    //                 "enable": false,
    //                 "value_area": 800
    //             }
    //         },
    //         "color": {
    //             "value": "#fff"
    //         },
    //         "shape": {
    //             "type": "star",
    //             "options": {
    //                 "sides": 5
    //             }
    //         },
    //         "opacity": {
    //             "value": 0.8,
    //             "random": false,
    //             "anim": {
    //                 "enable": false,
    //                 "speed": 1,
    //                 "opacity_min": 0.1,
    //                 "sync": false
    //             }
    //         },
    //         "size": {
    //             "value": 4,
    //             "random": false,
    //             "anim": {
    //                 "enable": false,
    //                 "speed": 40,
    //                 "size_min": 0.1,
    //                 "sync": false
    //             }
    //         },
    //         "rotate": {
    //             "value": 0,
    //             "random": true,
    //             "direction": "clockwise",
    //             "animation": {
    //                 "enable": true,
    //                 "speed": 5,
    //                 "sync": false
    //             }
    //         },
    //         "line_linked": {
    //             "enable": true,
    //             "distance": 600,
    //             "color": "#ffffff",
    //             "opacity": 0.4,
    //             "width": 2
    //         },
    //         "move": {
    //             "enable": true,
    //             "speed": 2,
    //             "direction": "none",
    //             "random": false,
    //             "straight": false,
    //             "out_mode": "out",
    //             "attract": {
    //                 "enable": false,
    //                 "rotateX": 600,
    //                 "rotateY": 1200
    //             }
    //         }
    //     },
    //     "interactivity": {
    //         "events": {
    //             "onhover": {
    //                 "enable": true,
    //                 "mode": ["grab"]
    //             },
    //             "onclick": {
    //                 "enable": false,
    //                 "mode": "bubble"
    //             },
    //             "resize": true
    //         },
    //         "modes": {
    //             "grab": {
    //                 "distance": 400,
    //                 "line_linked": {
    //                     "opacity": 1
    //                 }
    //             },
    //             "bubble": {
    //                 "distance": 400,
    //                 "size": 40,
    //                 "duration": 2,
    //                 "opacity": 8,
    //                 "speed": 3
    //             },
    //             "repulse": {
    //                 "distance": 200
    //             },
    //             "push": {
    //                 "particles_nb": 4
    //             },
    //             "remove": {
    //                 "particles_nb": 2
    //             }
    //         }
    //     },
    //     "retina_detect": true,
    //     "background": {
    //         "color": "#111",
    //         "image": "",
    //         "position": "50% 50%",
    //         "repeat": "no-repeat",
    //         "size": "cover"
    //     }
    // }}
    />
    </div>
  );
}

export default Particle;


