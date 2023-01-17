import React from "react";
import './Stack.css';
import prog from '../images/Prog.jpeg';

function Stack() {
    return (
        <div className="container">
            <div className="App">
                <div className="section1" id="stack">
                    <h3 class="title">STACK</h3>
                    <div className="textArea">
                        <div className="textStar">
                            <p>Nessa sessão vai ter todas as tecnologias que conheço e também o nível de conhecimento, sendo no <b>básico</b> as tecnologias que eu ainda não aprofundei ou tive pouca interação. No nível <b>intermediário</b> tecnologias que eu já usei bastante, mas que ainda realizo várias consultas para desenvolver algo. No nível <b>Avançado</b> são as que eu utilizo sempre para diversas coisas. </p>
                        </div>
                        <div className="img1">
                        </div>
                    </div>

                    <div className="starFather">
                        
                        <div className="star1">
                            <h4>Básico</h4>
                        </div>
                        <div className="star2">
                            <h4>Intermediário</h4>
                        </div>
                        <div className="star3">
                            <h4>Avançado</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;