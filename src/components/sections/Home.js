import { Component } from "react";

class Home extends Component{

    render (){
        return(
            <section id="home">
              <div className="presentation-text ">
                <b>
                <span>
                  <span className="letters typing-effect" content="O">O</span>
                  <span className="letters typing-effect" content="l">l</span>
                  <span className="letters typing-effect" content="á">á</span>
                </span>
                <span content="," className="typing-effect">,</span>
                <br/>
                <span className="word">
                  <span className="letters typing-effect" content="m">m</span>
                  <span className="letters typing-effect" content="e">e</span>
                  <span className="letters typing-effect" content="u ">u </span>
                </span>
                <span className="word">
                  <span className="letters typing-effect" content="n">n</span>
                  <span className="letters typing-effect" content="o">o</span>
                  <span className="letters typing-effect" content="m">m</span>
                  <span className="letters typing-effect" content="e ">e </span>
                </span>
                <span className="letters typing-effect" content="é ">é </span>
                <span className="word">
                  <span className="letters typing-effect" content="E">E</span>
                  <span className="letters typing-effect" content="d">d</span>
                  <span className="letters typing-effect" content="u">u</span>
                  <span className="letters typing-effect" content="a">a</span>
                  <span className="letters typing-effect" content="r">r</span>
                  <span className="letters typing-effect" content="d">d</span>
                  <span className="letters typing-effect" content="o">o</span>
                </span>
                <span className="blinking-cursor">|</span>
                <br/>
                </b>
                <div className="hover-underline-animation title-my-job">
                  Desenvolvedor Full Stack!
                </div>
                <div className="info-title">
                  Continue a navegação abaixo para saber mais sobre as tecnologias que utilizo! =)
                </div>
              </div>
            </section>
        )
    }
    
}

export default Home;

