import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import style from './LayoutHome.module.css';

import img1 from '../../assets/imagens/img1.jpg';
import img2 from '../../assets/imagens/img2.jpg';
import img3 from '../../assets/imagens/img3.jpg';

import setaEsquerda from '../../assets/imagens/seta e.png';
import setaDireita from '../../assets/imagens/seta d.png';
import MulherPensando from '../../assets/imagens/mulherIntroducao.png';
import Roupas from '../../assets/imagens/roupas.png';

import cidade from '../../assets/icones/map.png';
import local from '../../assets/icones/local.png';
import clima from '../../assets/icones/clima.png';


const imagens = [img1, img2, img3];

const LayoutHome = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      avancarImagem();
    }, 5000); // Troca a imagem a cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  const avancarImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

    const navigate = useNavigate();


  const handleEntrarClick = () => {
    navigate('/inicial'); // Substitua pela sua rota desejada
  };

  return (
    <div className={style.container}>
      <div className={style.carrossel}>
        <img
          src={imagens[indiceAtual]}
          alt={`Slide ${indiceAtual + 1}`}
          className={style.imagem}
        />
        
        
    <div className={style.setaDireita} onClick={() => setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length)}>
  <img src={setaEsquerda} alt="Anterior" />
</div>

<div className={style.setaEsquerda} onClick={() => setIndiceAtual((prev) => (prev + 1) % imagens.length)}>
  <img src={setaDireita} alt="Próxima" />
</div>

      <div id={style.triangulo}></div>

      </div>

      <div className={style.secaoIntro}>
  <img
    src={MulherPensando} // ou outro nome da imagem
    alt="Mulher usando roupa estilosa"
    className={style.imagemIntroMulher}
  />  

  <div className={style.textoIntro}>
  <h2 className={style.tituloIntro}>Como surgiu o Style Weather?</h2>
<p>
  Já saiu de casa sem saber direito o que vestir? <br />
  Passou calor demais ou ficou com frio porque o look não combinou com o clima? 
  Isso acontece com todo mundo, e foi pensando nisso que criamos o Style Weather.
  Aqui, você recebe dicas práticas para montar o visual perfeito, sempre levando em conta o clima da sua cidade. 
  Assim, você fica confortável e estiloso o dia todo, sem erro!
</p>

  </div>

  </div>

<div className={style.secaoIntroInversa}>
  <img
    src={ Roupas } // Altere para o nome correto da nova imagem
    alt="Roupas sugeridas pelo app"
    className={style.imagemIntroRoupas}
  />


  <div className={style.textoIntro2}>
    <h2 className={style.titulo}>Como funciona o Style Weather?</h2>
    <p>
     O Style Weather combina duas coisas que fazem toda a diferença na hora de escolher 
     o que vestir: o clima da sua cidade e as principais tendências da moda. Nosso site 
     consulta a previsão do tempo em tempo real para o local onde você está e, com base
     nisso, sugere looks estilosos e adequados para o dia.
    </p>
  </div>
</div>




<div>

  <div className={style.cardsSection}>
    
    <div className={style.card}>
  <h3 className={style.stepTitle}>1° PASSO</h3>
    
  <img src={cidade} className={style.cardImg} alt="Look Casual" />
  <div className={style.cardContent}>
    <h4>Cidade</h4>
    <p>Digite ou escolha a cidade onde você mora ou para onde vai viajar.</p>
  </div>
</div>

<div className={style.card}>
  <h3 className={style.stepTitle}>2° PASSO</h3>
  <img src={local} className={style.cardImg} alt="Look Inverno" />
  <div className={style.cardContent}>
    <h4>Local</h4>
    <p>Selecione o local que você pretende visitar para receber sugestões de looks adequados.</p>
  </div>
</div>



<div className={style.card}>
  <h3 className={style.stepTitle}>3° PASSO</h3>
  <img src={clima} className={style.cardImg} alt="Look Urbano" />
  <div className={style.cardContent}>
    <h4>Clima</h4>
    <p>Veja a previsão do clima da cidade para receber indicações de roupas ideais para o dia.</p>
  </div>
</div>

  </div>
</div>

<div className={style.novaSecao}>
  <h2 className={style.novoTitulo}>Agora é sua vez de se vestir de acordo com o tempo!</h2>
  <button type="submit" className={style.uploadButton}  onClick={handleEntrarClick} >ENTRAR</button>
</div>




    </div>
  );
};

export { LayoutHome };
