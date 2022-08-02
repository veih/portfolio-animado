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
        <div className="Container ">

            <div className="certificados row">
                <CertificadoBancoDados />
                <CertificadoGitGithub />
                <CertificadoBootstrap />
                <CertificadoHTML />
                <CertificadoJavascript />
                <CertificadoAngular />
                <CertificadoVueJS />
                <CertificadoReactJS />
                <CertificadoTypescript />
                <DesafiosJavascript />
                <JavascriptAssincroo /> 
                <JogoDaMemoria />
                <JogoDaVelha />
                <JogoDeNaves />
                <JogoDoDino />
                <LogicaDeProgramacao />
                <ManipulacaoDeDOM />
                <MapFilterReduce />
                <OrientacaoObjetoJS />
                <PageBootstrap />
                <PensamentoComputacional />
                <SpaceShooter />
                <AgeisSCRUM />
            </div>

        </div>
    )

}