import React from "react";
import "./css/phpSection.css"
import larvelimg from "./../assets/img/laravelNav.png"
import code from "./../assets/img/code.png"
import symphonie from "./../assets/img/symphonie.png"


function PhpSection() {

    return (
        <div className="contain">


        <div className="container" id="php">
            <main>
                <section>
                    <h2>Laravel</h2>
                    <div className="containerSection">
                        <h3>Projet FreeAds</h3>
                        <br/>
                        <p>
                            Ce projet a eu une durée de 7 jours pour que nous puissions le développer.
                            <br/>
                            <br/>
                            Le but étant de faire un site d'annonce simple, avec un système de connexion.
                            <br/>
                            <br/>
                            Au début du projet, je n'avais jamais utilisé de framework, donc j'ai apris en autodidacte.
                            <br/>
                            <img src={larvelimg} alt="simple screen" className="img-laravek"/>
                            <br/>
                            <p>petit éxemple de code que j'ai fais dans ce projet</p>
                            <img src={code} className="img-code-lra" alt="simple"/>

                        </p>
                    </div>

                </section>
                <section className="symphonie-backround">
                    <h2>Symphonie</h2>
                    <div className="containerSection" id="sympho">
                        <h3>Projet MyQuizz</h3>
                        <br/>
                        <br/>
                        <p>Ce projet a pour but de crée un quiz, il a été fais en groupe de 4
                        <br/>
                        <br/>
                            nous devions avoir la possiblitée de créer des quizs, de les modifier, et de les supprimer.

                        <br/>
                            pour mieux voir l'image , je vous conseille de la regarder sur un écrant d'ordinateur, ou de cliquer <a href={'http://localhost:3001/symphoniepicture'}>ici</a>.
                        </p>
                        <img src={symphonie} className="img-code-lra" alt="simple"/>

                    </div>
                </section>
            </main>

        </div>
        </div>
    )
}
export default PhpSection