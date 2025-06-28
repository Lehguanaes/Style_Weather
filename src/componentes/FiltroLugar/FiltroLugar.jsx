import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { buscarClimaPorCidade } from "../../services/weatherApi";
import { useNavigate } from "react-router-dom";
import styles from "./FiltroLugar.module.css";
import { CardClima } from "../CardClima/CardClima";
import { SweetAlert } from "../SweetAlert";

const opcoesLugar = [
  { value: "academia", label: "Academia" },
  { value: "balada", label: "Balada" },
  { value: "escola", label: "Escola" },
  { value: "parque", label: "Parque" },
  { value: "praia", label: "Praia" },
  { value: "restaurante", label: "Restaurante" },
  { value: "shopping", label: "Shopping" },
  { value: "trabalho", label: "Trabalho" }
];

const FiltroLugar = () => {
  const {
    lugarSelecionado,
    setLugarSelecionado,
    cidadeSelecionada,
    setDadosClima,
    dadosClima,
    usuarioLogado
  } = useContext(AppContext);

  const [mostrarCards, setMostrarCards] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (lugarSelecionado) {
      localStorage.setItem("lugarSelecionado", lugarSelecionado);
    }
  }, [lugarSelecionado]);

  const handleEscolherLook = () => {
    SweetAlert.error("Você não tem um cadastro no site! Por favor, cadastre-se.");
    navigate("/cadastrar");
  };

  // Mantém só a lógica para setar o lugar selecionado no clique
  const handleLugarClick = (value) => {
    if (!usuarioLogado) {
      handleEscolherLook();
      return;
    }
    setLugarSelecionado(value);
  };

  // Novo useEffect para buscar clima sempre que mudar cidadeSelecionada e usuário estiver logado
  useEffect(() => {
    const buscarClima = async () => {
      if (!usuarioLogado || !cidadeSelecionada) {
        setMostrarCards(false);
        return;
      }
      try {
        const clima = await buscarClimaPorCidade(cidadeSelecionada);

        const palavrasChaveChuva = ["rain", "drizzle", "thunderstorm", "shower"];
        const temChuva = clima?.weather?.some(w =>
          palavrasChaveChuva.some(chave =>
            w.main.toLowerCase().includes(chave) ||
            w.description.toLowerCase().includes(chave)
          )
        ) || clima?.rain !== undefined;

        const climaComChuva = { ...clima, temChuva };
        setDadosClima(climaComChuva);
        setMostrarCards(true);
      } catch (error) {
        console.error("Erro ao obter clima:", error);
        setMostrarCards(false);
      }
    };

    buscarClima();
  }, [cidadeSelecionada, usuarioLogado, setDadosClima]);

  return (
    <div className={styles.filtroLugar}>
      {/* Widget de clima primeiro */}
      {mostrarCards && dadosClima && (
        <div className={styles.cardsContainer}>
          <CardClima temChuva={dadosClima.temChuva} />
        </div>
      )}

      {/* Label e botões vêm depois */}
      <label className={styles.filtroLabel}><strong>Escolha o local:</strong></label>
      <div className={styles.botoesLugarContainer}>
        {opcoesLugar.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.botaoLugar} ${lugarSelecionado === value ? styles.botaoSelecionado : ''}`}
            onClick={() => handleLugarClick(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export { FiltroLugar };
