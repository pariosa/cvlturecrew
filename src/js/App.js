import './App.css';
import Tabs from './Tabs'
import Header from './Header'
import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Events from './Events';
import PastEvents from './PastEvents';
import Services from './Services';
import Particles from 'react-particles-js'
import PropTypes from 'prop-types';
class App extends Component {
 
  render() {     
      return(
        <div className="Layout" style={{margin:'0',padding:'0',height:'100%', display: 'flex',flexDirection: 'column'}}>   
            <Header />
            <Tabs>
            <div label="Home">
              <div className="content-bg">
              <Particles className="Particles"
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
              <Particles className="Particles"
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
            <div label="Events">
              <div className="content-bg">
              <Particles className="Particles"

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
               <Events/>
               <PastEvents/>
              </div>
            </div>
            <div label="Services">
              <div className="content-bg">
                <Particles className="Particles"
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
              <Particles className="Particles"
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
               <Contact env={this.props.env} />
              </div>
            </div>
            </Tabs>
         </div>
      )
    } 
} 
App.propTypes = {
  env: PropTypes.object.isRequired
};


export default App;