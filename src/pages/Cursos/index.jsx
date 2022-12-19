import React from "react"

import { CertificadoBootstrap } from "../../components/Cards/CertificadoBootstrap"
import { CertificadoBancoDados } from "../../components/Cards/CertificadoBancoDados"
import { CertificadoHTML } from "../../components/Cards/CertificaHTML"

import { CertificadoJavascript } from "../../components/Cards/CertificadoJavasrcipt"
import { CertificadoReactJS } from "../../components/Cards/CertificadoReactJS"
import { CertificadoTypescript } from "../../components/Cards/CertificadoTypescript"
import { DesafiosJavascript } from "../../components/Cards/DesafiosJavascript"
import { JavascriptAssincroo } from "../../components/Cards/JavascriptAssincro"
import { JogoDaMemoria } from "../../components/Cards/JogoDaMemoria"
import { JogoDaVelha } from "../../components/Cards/JogoDaVelha"
import { JogoDeNaves } from "../../components/Cards/JogoDeNaves"
import { JogoDoDino } from "../../components/Cards/JogoDoDino"
import { LogicaDeProgramacao } from "../../components/Cards/LogicaDeProgramacao"
import { ManipulacaoDeDOM } from "../../components/Cards/ManipulacaoDeDOM"
import { MapFilterReduce } from "../../components/Cards/MapFilterReduce"
import { OrientacaoObjetoJS } from "../../components/Cards/OrientacaoObjetoJS"
import { PageBootstrap } from "../../components/Cards/PageBootstrap"
import { PensamentoComputacional } from "../../components/Cards/PensamentoComputacional"
import { SpaceShooter } from "../../components/Cards/SpaceShooter"
import { AgeisSCRUM } from "../../components/Cards/ageisSCRUM"
import { CertificadoAngular } from "../../components/Cards/certificadoAngular"
import { CertificadoGitGithub } from "../../components/Cards/certificadoGitGithub"
import { CertificadoVueJS } from "../../components/Cards/certificadoVueJS"

import './Curso.css'

export const Cursos = () => {
    
    return (
        <div className="container cert">
            <div className="certificados">
                <div className="Container row">
                    <span><CertificadoBancoDados /></span>
                    <span><CertificadoGitGithub /></span>
                    <span><CertificadoBootstrap /></span>
                    <span><CertificadoHTML /></span>
                    <span><CertificadoJavascript /></span>
                    <span><CertificadoAngular /></span>
                    <span><CertificadoVueJS /></span>
                    <span><CertificadoReactJS /></span>
                    <span><CertificadoTypescript /></span>
                    <span><DesafiosJavascript /></span>
                    <span><JavascriptAssincroo /></span>
                    <span><JogoDaMemoria /></span>
                    <span><JogoDaVelha /></span>
                    <span><JogoDeNaves /></span>
                    <span><JogoDoDino /></span>
                    <span><LogicaDeProgramacao /></span>
                    <span><ManipulacaoDeDOM /></span>
                    <span><MapFilterReduce /></span>
                    <span><OrientacaoObjetoJS /></span>
                    <span><PageBootstrap /></span>
                    <span><PensamentoComputacional /></span>
                    <span><SpaceShooter /></span>
                    <span><AgeisSCRUM /></span>
                </div>
            </div>

        </div>
    )

}