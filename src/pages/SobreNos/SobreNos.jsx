import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './SobreNos.module.css';
import logoImg from '../../assets/logo/logo_sobre_nos.png';
import logoResponsiva from '../../assets/logo/logo_responsiva.png';
import jovanaImg from '../../assets/desenvolvedoras/dev_jovana.jpg';
import karinneImg from '../../assets/desenvolvedoras/dev_karinne.jpg';
import leticiaImg from '../../assets/desenvolvedoras/dev_leticia.jpg';
import mariaImg from '../../assets/desenvolvedoras/dev_maria.jpg';
import fotoGrupoJuntas from '../../assets/desenvolvedoras/desenvolvedoras.jpg';
import { AppContext } from '../../context/AppContext';

function SobreNos() {
  const { usuarioLogado } = useContext(AppContext);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=styleweatherinfo@gmail.com&su=Contato%20Style%20Weather',
      '_blank'
    );
  };

  return (
    <div className={style.container}>
      <div className={style.leftPanel}>
        <div className={style.logoBox}>
          <img
            src={logoImg}
            alt="Style Weather Logo"
            className={`${style.logoImg} ${style.defaultLogo}`}
          />
          <img
            src={logoResponsiva}
            alt="Style Weather Logo Responsiva"
            className={`${style.logoImg} ${style.responsiveLogo}`}
          />
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
        <p>
          <span className={style.emailLabel}>Email: </span>
          <a 
            href="#"
            onClick={handleEmailClick}
            className={style.emailLink}
          >
            styleweatherinfo@gmail.com
          </a>
        </p>
          </div>
          <div className={style.signup}>
            {usuarioLogado ? (
              <Link to="../editar-perfil" className={style.signupButton}>Perfil</Link>
            ) : (
              <Link to="../cadastrar" className={style.signupButton}>Cadastre-se</Link>
            )}
          </div>
          <div className={style.fundadores}>
            <h3 className={style.subtitulo}>Quem fundou esse projeto?</h3>
            <div className={style.fotoGrupo}>
              <img src={fotoGrupoJuntas} alt="Foto das fundadoras juntas" />
              <p>
                Unidas pela vontade de inovar, desenvolvemos este projeto com base em nossas novas experiências e habilidades complementares aprimoradas. Cada detalhe foi pensado com carinho, dedicação e trabalho em equipe.
              </p>
            </div>
            <div className={style.cardContainer}>
              <div className={style.card}>
                <img src={jovanaImg} alt="Jovana Oliveira" />
                <h4>Jovana Oliveira</h4>
                <p>Desenvolvedora e principal responsável pelo banco de dados e login.</p>
              </div>
              <div className={style.card}>
                <img src={karinneImg} alt="Karinne Angelo" />
                <h4>Karinne Angelo</h4>
                <p>Desenvolvedora e principal responsável pela organização dos componentes reutilizáveis.</p>
              </div>
              <div className={style.card}>
                <img src={leticiaImg} alt="Letícia Guanaes" />
                <h4>Letícia Guanaes</h4>
                <p>Desenvolvedora e principal responsável pela implementação das API's e lógica.</p>
              </div>
              <div className={style.card}>
                <img src={mariaImg} alt="Maria Monteiro" />
                <h4>Maria Monteiro</h4>
                <p>Desenvolvedora e principal responsável pela experiência do usuário.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SobreNos };