import { AgeisSCRUM } from "./AgeisSCRUM"
import { CertificadoAngular } from "./CertificadoAngular"
import { CertificadoBancoDados } from "./CertificadoBancoDados"
import { CertificadoBootstrap } from "./CertificadoBootstrap"
import { CertificadoGitGithub } from "./CertificadoGitGithub"
import { CertificadoReactJS } from "./CertificadoReactJS"
import { CertificadoTypescript } from "./CertificadoTypescript"
import { CertificadoVueJS } from "./CertificadoVueJS"
import { CertificadoHTML } from "./CertificaHTML"
import { DesafiosJavascript } from "./DesafiosJavascript"
import { JavascriptAssincroo } from "./JavascriptAssincro"
import { JogoDaMemoria } from './JogoDaMemoria'
import { JogoDaVelha } from './JogoDaVelha'
import { JogoDeNaves } from './JogoDeNaves'
import { JogoDoDino } from './JogoDoDino'
import { LogicaDeProgramacao } from './LogicaDeProgramacao'
import { ManipulacaoDeDOM } from './ManipulacaoDeDOM'
import { OrientacaoObjetoJS } from './OrientacaoObjetoJS'
import { PageBootstrap } from './PageBootstrap'
import { PensamentoComputacional } from './PensamentoComputacional'
import { SpaceShooter } from './SpaceShooter'


export const Cards = () => {
    return (
        <div className="cardImg">

         <AgeisSCRUM />
         <DesafiosJavascript />
         <JavascriptAssincroo />
         <JogoDaMemoria />
         <JogoDaVelha />
         <JogoDeNaves />
         <JogoDoDino />
         <LogicaDeProgramacao />
         <ManipulacaoDeDOM />
         <OrientacaoObjetoJS />
         <PageBootstrap />
         <PensamentoComputacional />
         <SpaceShooter />
         <CertificadoReactJS />
         <CertificadoAngular />
         <CertificadoBancoDados />
         <CertificadoBootstrap />
         <CertificadoGitGithub />
         <CertificadoTypescript />
         <CertificadoVueJS />
         <CertificadoHTML />

        </div>
    )
}