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
                        <p className="card-text" style={{display: "none"}}>jQuery é uma biblioteca de JavaScript popular e de código aberto que simplifica a interação com elementos HTML, o gerenciamento de eventos, animações e a realização de requisições AJAX. Com sua sintaxe simplificada, o jQuery permite aos desenvolvedores criar de forma eficiente interações dinâmicas e funcionais em páginas da web, economizando tempo e esforço no desenvolvimento</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/bootstrap.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Bootstrap</h5>
                        <p className="card-text" style={{display: "none"}}>Bootstrap é um framework de código aberto que facilita a criação de sites responsivos e estilizados. Com uma combinação de HTML, CSS e JavaScript, o Bootstrap fornece uma série de componentes pré-estilizados e uma grade flexível que ajudam os desenvolvedores a construir interfaces modernas e consistentes. Com o Bootstrap, é possível criar rapidamente layouts atrativos e adaptáveis, garantindo uma experiência de usuário agradável em diferentes dispositivos e tamanhos de tela.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/html5.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">HTML5</h5>
                        <p className="card-text" style={{display: "none"}}>HTML5 é a mais recente versão da linguagem de marcação padrão para construção e apresentação de páginas da web. Com recursos avançados, o HTML5 permite a criação de sites interativos e ricos em conteúdo, oferecendo suporte a elementos multimídia, gráficos vetoriais, animações e semântica aprimorada. Além disso, o HTML5 introduziu recursos como formulários avançados, armazenamento local e suporte para dispositivos móveis, permitindo que os desenvolvedores construam experiências online modernas e adaptáveis.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/css.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">CSS</h5>
                        <p className="card-text" style={{display: "none"}}>CSS, que significa Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem de estilo utilizada para definir a aparência e o layout de elementos em páginas da web. Com o CSS, os desenvolvedores podem controlar as cores, fontes, espaçamento, posicionamento e outros aspectos visuais de um site. Ele permite separar o conteúdo estrutural (HTML) da sua apresentação visual, proporcionando flexibilidade e facilitando a manutenção do código. Com o CSS, é possível criar designs atraentes, responsivos e consistentes em todas as páginas de um site.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/javascript.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Javascript</h5>
                        <p className="card-text" style={{display: "none"}}>JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. Ela permite adicionar interatividade e funcionalidade às páginas da web, tornando-as dinâmicas e responsivas. Com o JavaScript, os desenvolvedores podem criar e manipular elementos HTML, controlar eventos, realizar validações de formulários, criar animações, realizar requisições assíncronas e muito mais. É uma linguagem versátil que possibilita a criação de aplicativos web interativos e poderosos, tornando a experiência do usuário mais envolvente e personalizada.</p>
                        {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/animejs.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Animejs</h5>
                        <p className="card-text" style={{display: "none"}}>
Anime.js é uma biblioteca JavaScript leve e poderosa que facilita a criação de animações suaves e complexas em páginas da web. Com uma sintaxe simples e intuitiva, o Anime.js permite animar propriedades CSS, como posição, cor, escala e rotação, além de oferecer suporte a animações de SVG, alongamento de trajetória e muito mais. Com essa biblioteca, os desenvolvedores podem adicionar movimento e vida aos elementos da página, criando experiências visuais impressionantes e envolventes para os usuários. Anime.js é uma ótima escolha para quem busca criar animações personalizadas e de alto desempenho de forma descomplicada.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/nodejs.svg" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nodejs</h5>
                        <p className="card-text" style={{display: "none"}}>Node.js é um ambiente de tempo de execução JavaScript de código aberto, construído sobre o motor V8 do Google Chrome. Ele permite que os desenvolvedores executem código JavaScript no lado do servidor, em vez de apenas no navegador. Com o Node.js, é possível criar aplicativos web escaláveis, rápidos e eficientes, lidar com solicitações simultâneas e realizar operações de E/S de forma assíncrona.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/reactjs.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Reactjs</h5>
                        <p className="card-text" style={{display: "none"}}>
React.js é uma biblioteca JavaScript de código aberto, mantida pelo Facebook, que permite a construção de interfaces de usuário interativas e reativas. Com o React, os desenvolvedores podem criar componentes reutilizáveis e declarativos, que atualizam automaticamente a interface em resposta a mudanças nos dados.</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/php.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">PHP</h5>
                        <p className="card-text" style={{display:"none"}}>PHP é uma linguagem de script de código aberto amplamente utilizada para o desenvolvimento de aplicações web. Com uma sintaxe semelhante à do HTML, o PHP é executado no lado do servidor, permitindo que os desenvolvedores criem páginas dinâmicas e interativas. Com o PHP, é possível manipular formulários, gerar conteúdo dinamicamente, acessar bancos de dados e muito mais. É uma linguagem versátil e de fácil aprendizado, com uma vasta comunidade de desenvolvedores e uma ampla gama de recursos e frameworks disponíveis.

</p>
                          {/*<a href="#" className="btn btn-primary">Ver mais</a>*/}
                      </div>
                    </Col>
                    <Col lg={6} className="card" onMouseEnter={this.cardSet} onTouchStart={this.cardSet} onPointerDown={this.cardSet}>
                      <img className="card-img-top" src="tech-logos/mysql.png" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">MySQL</h5>
                        <p className="card-text" style={{display: "none"}}>MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado. Ele fornece uma estrutura eficiente para armazenar, organizar e gerenciar dados em aplicações web. Com o MySQL, os desenvolvedores podem criar tabelas, realizar consultas complexas, realizar operações de atualização e manipulação de dados de forma eficiente. É um banco de dados confiável e de alto desempenho, com suporte para múltiplos usuários e acesso concorrente. O MySQL é frequentemente usado em conjunto com o PHP, formando uma combinação poderosa para o desenvolvimento de aplicações web dinâmicas e baseadas em banco de dados.</p>
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
