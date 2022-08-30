

import React, { Component } from 'react';
import "@fontsource/montserrat";
/*import "bootstrap-icons/font/bootstrap-icons.css";*/
import { Container, Row, Col, Nav, NavItem, NavLink, Form } from 'react-bootstrap';
import Tools from './sections/Tools';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Home from './sections/Home';

import '../styles/App.css';
import '../styles/App.scss';

class Page extends Component {

    constructor(props){
        super(props);
        this.state = { 
          theme : "dark"
        }
        this.themeSet = this.themeSet.bind(this);
    }
    typing(){
        const typings = document.querySelectorAll(".typing-effect");
        const interval = 100;
        typings.forEach(function (item, index){
            setTimeout(function () {
                item.style.display = "inline"
            }, index * interval);
        })
    }
    themeSet(event){
        if(event.target.name === "choice") {
          const r = document.querySelector(':root');
          console.log(this.state.theme)
          if (this.state.theme === "dark"){
            r.style.setProperty('--stars-color', 'white')
            r.style.setProperty('--background', 'right bottom');
            r.style.setProperty('--bg-color', 'white');
            r.style.setProperty('--primary-color', 'black');
            r.style.setProperty('--secondary-color', 'black');
            
            r.style.setProperty('--icon-color', 'invert(0%) drop-shadow(3px 5px 2px #0085c847)');
            
            this.setState({theme : "light"});
          }else{
            r.style.setProperty('--stars-color', 'blue')
            r.style.setProperty('--background', 'left bottom');
            r.style.setProperty('--bg-color', 'black');
            r.style.setProperty('--primary-color', '#868686');
            r.style.setProperty('--secondary-color', 'white');
            r.style.setProperty('--icon-color', 'invert(100%) drop-shadow(3px 5px 2px #0085c847)');
            
            this.setState({theme : "dark"});
          }
        }
    }

  render (){
    return (
        <Container fluid>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Row id="row-content">
            <Col md={2} id="left-col" className="fixed">
            <div className="sticky-top">
              <Row className="text-center">
                <Col><span className="bi bi-sun color-light-blue"></span></Col>
                <Col><Form.Check type="switch" id="toggle-switch-id" name="choice" onChange={this.themeSet} defaultChecked/></Col>
                <Col><span className="bi bi-moon color-light-blue"></span></Col>
              </Row>
              <Row className="d-none d-md-block">
                <img src="/image.svg" className="filter-svg" id="svgImage"/>
              </Row>
              <Row>
                <Nav className="lateral-bar d-block">
                  <NavItem>
                    <NavLink href="#home">Início</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#tools">Tecnologias</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#contact">Contatos</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#projects">Projetos</NavLink>
                  </NavItem>
                </Nav>
              </Row>
              </div>
            </Col>
            <Col md={10} className="scrollit" style={{padding: "20px"}}>
              <Home></Home>
              <Tools></Tools>
              <Contact></Contact>
              <Projects></Projects>
            </Col>
          </Row>
        </Container>
    )
    };
    componentDidMount(){
    this.typing();
    /*this.animateShapes();*/
    /*window.addEventListener('mousemove', this.animateShapes);*/

    }
}

export default Page;
