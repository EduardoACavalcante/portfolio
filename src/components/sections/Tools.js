import { Component } from "react";
import { Row, Col } from 'react-bootstrap';

class Tools extends Component{
    constructor(props){

      super(props);

      this.state = { 
        tool: "JQuery",
        toolData : "jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.",
        toolImg : "tech-logos/jquery.png"
      };

      this.cardSet = this.handleBoxToggle.bind(this);

    }

    handleBoxToggle = (event) => {

      let img = event.target.firstElementChild.src;
      let toolName = event.target.children[1].firstElementChild.innerHTML;
      let toolInfo = event.target.children[1].children[1].innerHTML;
      
      if(img && toolName && toolInfo){
        let tool = { tool: toolName };
        let toolImg = { toolImg: img };
        let toolData = { toolData: toolInfo };

        this.setState(tool);
        this.setState(toolImg);
        this.setState(toolData);
      }
    }
    render (){
        return(
            <section id="tools">
              <Row>
                <Col sm={12} xs={12} className="d-flex">
                  <div className="" style={{borderBottom: "5px solid #0087ca", width: "400px", textAlign: "center", margin: "35px 0 10px", fontSize: "35px", fontWeight: "bold", color: "var(--secondary-color)"}}>Ferramentas utilizadas</div>
                </Col>
                <Col lg={6} md={5} xs={12}>
                  <Row className="p-2">
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/jquery.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">JQuery</h5>
                        <p className="card-text" style={{display: "none"}}>jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/bootstrap.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Bootstrap</h5>
                        <p className="card-text" style={{display: "none"}}>Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/html5.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">HTML5</h5>
                        <p className="card-text" style={{display: "none"}}>HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/css.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">CSS</h5>
                        <p className="card-text" style={{display: "none"}}>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/javascript.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Javascript</h5>
                        <p className="card-text" style={{display: "none"}}>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
                        {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/animejs.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Animejs</h5>
                        <p className="card-text" style={{display: "none"}}>Anime.js é uma biblioteca leve de animação JavaScript com uma API simples, mas poderosa.
    Funciona com propriedades CSS, SVG, atributos DOM e objetos JavaScript.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/nodejs.svg" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nodejs</h5>
                        <p className="card-text" style={{display: "none"}}>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/reactjs.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Reactjs</h5>
                        <p className="card-text" style={{display: "none"}}>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/php.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">PHP</h5>
                        <p className="card-text" style={{display:"none"}}>PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/mysql.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">MySQL</h5>
                        <p className="card-text" style={{display: "none"}}>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} md={5} className="d-md-block d-lg-block d-none p-2">
                  <div className="card sticky-top">
                    <img className="card-img-top" src={this.state.toolImg} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{this.state.tool}</h5>
                      <p className="card-text">{this.state.toolData}</p>
                      {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
        )
    }
}

export default Tools;