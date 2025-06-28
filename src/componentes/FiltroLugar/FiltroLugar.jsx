import React, { useContext, useState } from "react";
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

    const handleEscolherLook = () => {
        SweetAlert.error("Você não tem um cadastro no site! Por favor, cadastre-se.");
        navigate("/cadastrar");
    };

    // Agora, busca o clima e atualiza tudo assim que o estilo mudar
    const handleLugarClick = async (value) => {
        if (!usuarioLogado) {
            handleEscolherLook();
            return;
        }

        setLugarSelecionado(value);

        if (!cidadeSelecionada) return;

        setMostrarCards(false);

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
        }
    };

    return (
        <div className={styles.filtroLugar}>
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

            {/* Removi o botão "Escolher look" */}

            {mostrarCards && dadosClima && (
                <div className={styles.cardsContainer}>
                    <CardClima temChuva={dadosClima.temChuva} />
                </div>
            )}
        </div>
    );
};

export { FiltroLugar };
