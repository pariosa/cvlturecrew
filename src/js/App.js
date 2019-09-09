import './App.css';
import Tabs from './Tabs'
import Header from './Header'
import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Particles from 'react-particles-js'
class App extends Component {
 
  render() {     
      return(
        <div className="Layout">   
            <Header />
            <Tabs>
            <div label="Home">
              <div className="content-bg">
              <Particles
                params={{
                  "particles": {
                      "number": {
                          "value": 160,
                          "density": {
                              "enable": false
                          }
                      },
                      "size": {
                          "value": 3,
                          "random": true,
                          "anim": {
                              "speed": 4,
                              "size_min": 0.3
                          }
                      },
                      "line_linked": {
                          "enable": false
                      },
                      "move": {
                          "random": true,
                          "speed": 1,
                          "direction": "top",
                          "out_mode": "out"
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "bubble"
                          },
                          "onclick": {
                              "enable": true,
                              "mode": "repulse"
                          }
                      },
                      "modes": {
                          "bubble": {
                              "distance": 250,
                              "duration": 2,
                              "size": 0,
                              "opacity": 0
                          },
                          "repulse": {
                              "distance": 400,
                              "duration": 4
                          }
                      }
                  }
              }} />
                <Home/>
              </div>
            </div>
            <div label="About">
              <div className="content-bg">
              <Particles
                params={{
                  "particles": {
                      "number": {
                          "value": 160,
                          "density": {
                              "enable": false
                          }
                      },
                      "size": {
                          "value": 3,
                          "random": true,
                          "anim": {
                              "speed": 4,
                              "size_min": 0.3
                          }
                      },
                      "line_linked": {
                          "enable": false
                      },
                      "move": {
                          "random": true,
                          "speed": 1,
                          "direction": "top",
                          "out_mode": "out"
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "bubble"
                          },
                          "onclick": {
                              "enable": true,
                              "mode": "repulse"
                          }
                      },
                      "modes": {
                          "bubble": {
                              "distance": 250,
                              "duration": 2,
                              "size": 0,
                              "opacity": 0
                          },
                          "repulse": {
                              "distance": 400,
                              "duration": 4
                          }
                      }
                  }
              }} />
                <About/>
              </div>
            </div>
            <div label="Services">
              <div className="content-bg">
                <Particles
                  params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
                <Services/>
              </div>
            </div>
            <div label="Contact">
              <div className="content-bg">
              <Particles
                  params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
               <Contact/>
              </div>
            </div>
            </Tabs>
         </div>
      )
    } 
} 

export default App;