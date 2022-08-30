import { Component } from "react";
import { Row, Col } from 'react-bootstrap';

class Projects extends Component{
    
    render (){
        return(
            <section id="projects">
              <div>
                <Row>
                  <Col>
                    <Row style={{borderBottom: "5px solid #0087ca", width: "400px", textAlign: "center", margin: "35px 0 10px", fontSize: "35px", fontWeight: "bold", color: "var(--secondary-color)"}}>Projetos</Row>
                    <Row>
                      <Col md={4}>
                        <div className="p-0 border" style={{minHeight: "330px"}}>
                          <a href="https://minhavez.app" className="text-center">
                            <img src="projects/minhavez.png" style={{width: "100%"}}/>
                          </a>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{minHeight: "330px", color: "var(--secondary-color)"}}>
                          <div className="ml-auto mr-auto">
                            <div>Em breve</div>
                            <div style={{marginLeft: "44px", marginTop: "5px"}}>
                            <div className="dot-flashing"></div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{minHeight: "330px", color: "var(--secondary-color)"}}>
                          <div className="ml-auto mr-auto">
                            <div>Em breve</div>
                            <div style={{marginLeft: "44px", marginTop: "5px"}}>
                            <div className="dot-flashing"></div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{minHeight: "330px", color: "var(--secondary-color)"}}>
                          <div className="ml-auto mr-auto">
                            <div>Em breve</div>
                            <div style={{marginLeft: "44px", marginTop: "5px"}}>
                            <div className="dot-flashing"></div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="d-none d-md-block">
                        <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{minHeight: "330px", color: "var(--secondary-color)"}}>
                          <div className="ml-auto mr-auto">
                            <div>Em breve</div>
                            <div style={{marginLeft: "44px", marginTop: "5px"}}>
                            <div className="dot-flashing"></div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="col-md-4 d-none d-md-block">
                        <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{minHeight: "330px", color: "var(--secondary-color)"}}>
                          <div className="ml-auto mr-auto">
                            <div>Em breve</div>
                            <div style={{marginLeft: "44px", marginTop: "5px"}}>
                            <div className="dot-flashing"></div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>
        )
    }
}

export default Projects;