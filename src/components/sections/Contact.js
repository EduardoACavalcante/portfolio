import { Component } from "react";
import { Row, Col } from 'react-bootstrap';

class Contact extends Component{
    
    render (){
        return(
            <section id="contact">
              <div className="">
                <Row>
                  <Col sm={12} xs={12} className="d-flex" >
                    <div className="sticky-top" style={{borderBottom: "5px solid #0087ca", width: "400px", margin: "35px 0 10px", fontSize: "35px", fontWeight: "bold", color: "var(--secondary-color)"}}>Contatos</div>
                  </Col>
                </Row>
                <div style={{margin: "5px 10px 35px"}}>
                  Esteja a vontade para me mandar e-mails ou contactar-me pelo Linkedin.
                </div>
                <Row>
                  <a href="https://www.linkedin.com/in/eduardo-cavalcante-9ba898225/">
                    <Col sm={6}>
                      <img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" style={{height: "150px"}}></img>
                      Linkedin
                    </Col>
                  </a>
                  <Col sm={6}></Col>
                </Row>
                <Row>
                <a href="mailto:eduacavalcante54@gmail.com">
                    <Col sm={6}>
                      <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png" style={{height: "150px"}}></img>
                      E-mail
                    </Col>
                  </a>
                  <Col sm={6}></Col>
                </Row>
              </div>
            </section>
        )
    }
}

export default Contact;