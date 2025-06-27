import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './SobreNos.module.css';
import logoImg from '../../assets/logo/logo_sobre_nos.png';
import jovanaImg from '../../assets/desenvolvedoras/dev_jovana.jpg';
import karinneImg from '../../assets/desenvolvedoras/dev_karinne.jpg';
import leticiaImg from '../../assets/desenvolvedoras/dev_leticia.jpg';
import mariaImg from '../../assets/desenvolvedoras/dev_maria.jpg';
import fotoGrupoJuntas from '../../assets/desenvolvedoras/desenvolvedoras.jpg';
import { AppContext } from '../../context/AppContext';

const logoImagens = [logoImg, logoImg]; 

function SobreNos() {
  const { usuarioLogado } = useContext(AppContext);
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % logoImagens.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=styleweatherinfo@gmail.com&su=Contato%20Style%20Weather',
      '_blank'
    );
  };

  const desenvolvedoras = [
    {
      img: jovanaImg,
      nome: "Jovana Oliveira",
      desc: "Desenvolvedora e principal responsável pelo banco de dados e login"
    },
    {
      img: karinneImg,
      nome: "Karinne Angelo", 
      desc: "Desenvolvedora e principal responsável pela organização dos componentes reutilizáveis"
    },
    {
      img: leticiaImg,
      nome: "Letícia Guanaes",
      desc: "Desenvolvedora e principal responsável pela implementação das API's e lógica"
    },
    {
      img: mariaImg,
      nome: "Maria Monteiro",
      desc: "Desenvolvedora e principal responsável pela experiência do usuário"
    }
  ];

  return (
    <div className={style.container}>
      {/* Carrossel no topo */}
      <div className={style.logoCarrossel}>
        <img
          src={logoImagens[indiceAtual]}
          alt="Style Weather Logo"
          className={style.logoCarrosselImg}
        />
        
        <div 
          className={style.carrosselSetaEsquerda} 
          onClick={() => setIndiceAtual((prev) => (prev - 1 + logoImagens.length) % logoImagens.length)}
        >
          &lt;
        </div>
        
        <div 
          className={style.carrosselSetaDireita} 
          onClick={() => setIndiceAtual((prev) => (prev + 1) % logoImagens.length)}
        >
          &gt;
        </div>
        
        <div className={style.carrosselIndicadores}>
          {logoImagens.map((_, index) => (
            <span 
              key={index}
              className={`${style.indicador} ${index === indiceAtual ? style.ativo : ''}`}
              onClick={() => setIndiceAtual(index)}
            />
          ))}
        </div>
        
      </div>

      {/* Conteúdo principal */}
      <div className={style.content}>
        <div className={style.welcome}>
          <h2 className={style.titulo}>Sobre Nós</h2>
          <h3 className={style.frase}>Com a nossa ajuda, o clima nunca te pega desprevenido!</h3>
          
          <div className={style.textContent}>
            <p className={style.paragrafo}>
              No Style Weather, transformamos a forma como você se prepara para o seu dia.
              Nossa plataforma une tecnologia, estilo e praticidade para ajudar você a escolher o
              look ideal com base no clima da sua região e nos compromissos que tem pela frente.
            </p>
            <p className={style.paragrafo}>
              Nossa startup criou uma experiência personalizada, feita para pessoas modernas que valorizam
              conforto, tempo e bem-estar. Seja para um dia chuvoso ou ensolarado, estamos aqui
              para garantir que você esteja pronto, elegante e seguro para qualquer ocasião.
            </p>
          </div>

          <div className={style.contact}>
            <p>
              <span className={style.emailLabel}>Email: </span>
              <a href="#" onClick={handleEmailClick} className={style.emailLink}>
                styleweatherinfo@gmail.com
              </a>
            </p>
          </div>

          <div className={style.signup}>
            {usuarioLogado ? (
              <Link to="../editar-perfil" className={style.signupButton}>Perfil</Link>
            ) : (
              <Link to="../cadastrar" className={style.signupButton}>Cadastre-se!</Link>
            )}
          </div>

          <div className={style.fundadores}>

            
            <h3 className={style.subtitulo}>Quem fundou esse projeto?</h3>
            
            <div className={style.fotoGrupo}>
  <img 
    src={fotoGrupoJuntas} 

    alt="Foto das fundadoras juntas" 
    className={style.fotoGrupoImg} 
  />
  
  <p className={style.fotoGrupoTexto}>
                Unidas pela vontade de inovar, desenvolvemos este projeto com base em nossas novas experiências e habilidades complementares aprimoradas. Cada detalhe foi pensado com carinho, dedicação e trabalho em equipe.
              </p>
            </div>
            
            <div className={style.cardContainer}>
              
              {desenvolvedoras.map((dev, index) => (
               <div 
  key={index}
  className={style.card}
  style={{ '--order': index }} // Remova a tipagem TypeScript
>
  <img src={dev.img} alt={dev.nome} className={style.cardImg} />
  <h4 className={style.cardTitle}>{dev.nome}</h4>
  <p className={style.cardText}>{dev.desc}</p>
</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SobreNos };