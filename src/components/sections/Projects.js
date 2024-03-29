import { Component } from "react";
import { Row, Col } from 'react-bootstrap';

class Projects extends Component {

  render() {
    return (
      <section id="projects">
        <div>
          <Row>
            <Col sm={12} xs={12} className="d-flex" >
              <div className="sticky-top" style={{ borderBottom: "5px solid #0087ca", width: "400px", margin: "35px 0 10px", fontSize: "35px", fontWeight: "bold", color: "var(--secondary-color)" }}>Projetos</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md={4}>
                  <div className="p-0 border" style={{ height: "225px", overflow: "hidden" }}>
                    <a href="https://minhavez.app" className="text-center">
                      <img src="projects/minhavez.png" style={{ width: "100%" }} />
                    </a>
                  </div>
                  <hr class="hr hr-blurry d-md-none d-lg-none d-block" />
                </Col>
                <Col md={4}>
                  <div className="p-0 border" style={{ height: "225px", overflow: "hidden" }}>
                    <a href="https://inline-extractor.vercel.app" className="text-center">
                      <img src="projects/inline-extractor.png" style={{ width: "100%" }} />
                    </a>
                  </div>
                  <hr class="hr hr-blurry d-md-none d-lg-none d-block" />
                </Col>
                <Col md={4}>
                  <div className="p-0 border" style={{ height: "225px", overflow: "hidden" }}>
                    <a href="https://chee.com.br" className="text-center">
                      <img src="projects/chega-hora-essa.png" style={{ width: "100%" }} />
                    </a>
                  </div>
                  <hr class="hr hr-blurry d-md-none d-lg-none d-block" />
                </Col>
                <Col md={4}>
                  <div className="p-0 border" style={{ height: "225px", overflow: "hidden" }}>
                    <a href="https://eduardocavalcante.vercel.app" className="text-center">
                      <img src="projects/portifolio.png" style={{ width: "100%" }} />
                    </a>
                  </div>
                  <hr class="hr hr-blurry d-md-none d-lg-none d-block" />
                </Col>
                <Col md={4} className="d-none d-md-block">
                  <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{ height: "225px", overflow: "hidden", color: "var(--secondary-color)" }}>
                    <div className="ml-auto mr-auto">
                      <div>Em breve</div>
                      <div style={{ marginLeft: "44px", marginTop: "5px" }}>
                        <div className="dot-flashing"></div>
                      </div>
                    </div>
                  </div>
                  <hr class="hr hr-blurry d-md-none d-lg-none d-block" />
                </Col>
                <Col md={4} className="col-md-4 d-none d-md-block">
                  <div className="p-3 border d-flex justify-content-center align-items-center project-div square" style={{ height: "225px", overflow: "hidden", color: "var(--secondary-color)" }}>
                    <div className="ml-auto mr-auto">
                      <div>Em breve</div>
                      <div style={{ marginLeft: "44px", marginTop: "5px" }}>
                        <div className="dot-flashing"></div>
                      </div>
                    </div>
                  </div>
                  <hr className="hr hr-blurry d-md-none d-lg-none d-block" />
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