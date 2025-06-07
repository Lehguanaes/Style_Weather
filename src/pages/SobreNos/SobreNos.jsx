import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import style from './SobreNos.module.css'; // Importa o CSS como módulo
import logoImg from '../../assets/logo_sobre_nos.png'; // Importe a imagem do logo
import logoResponsiva from '../../assets/logo_responsiva.png';
import { AppContext } from '../../context/AppContext'; // Importa o contexto global

function SobreNos() {
  const { usuarioLogado } = useContext(AppContext); // Obtém o estado de autenticação do contexto

  return (
    <div className={style.container}>
      <div className={style.leftPanel}>
        <div className={style.logoBox}>
          <img src={logoImg} alt="Style Weather Logo" className={`${style.logoImg} ${style.defaultLogo}`} />
          <img src={logoResponsiva} alt="Style Weather Logo Responsiva" className={`${style.logoImg} ${style.responsiveLogo}`} />
        </div>
      </div>

      <div className={style.rightPanel}>
        <div className={style.welcome}>
          <h2 className={style.titulo}>Sobre Nós</h2>
          <h3 className={style.frase}>Com a nossa ajuda, o clima nunca te pega desprevenido!</h3>
          <p className={style.paragrafo}>
            No Style Weather, transformamos a forma como você se prepara para o seu dia.
            Nossa plataforma une tecnologia, estilo e praticidade para ajudar você a escolher o
            look ideal com base no clima da sua região e nos compromissos que tem pela frente.
          </p>
          <p>
            Nossa startup criou uma experiência personalizada, feita para pessoas modernas que valorizam
            conforto, tempo e bem-estar. Seja para um dia chuvoso ou ensolarado, estamos aqui
            para garantir que você esteja pronto, elegante e seguro para qualquer ocasião.
          </p>

          <div className={style.contact}>
            <p><strong>Email:</strong> info@styleweather.com</p>
            <p><strong>Telefone:</strong> (11) 94519-3458</p>
          </div>

          <div className={style.signup}>
            {usuarioLogado ? (
              <Link to="../editar-perfil" className={style.signupButton}>Perfil</Link>
            ) : (
              <Link to="../cadastrar" className={style.signupButton}>Cadastre-se</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { SobreNos };