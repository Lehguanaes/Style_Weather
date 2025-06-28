import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./CardClima.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThermometerHalf,
    faTemperatureArrowUp,
    faTemperatureArrowDown,
    faDroplet,
    faTemperatureLow,
    faWind
} from "@fortawesome/free-solid-svg-icons";

const CardClima = () => {
    const { cidadeSelecionada, dadosClima } = useContext(AppContext);

    if (!dadosClima) return null;

    const {
        name,
        weather,
        main,
        wind,
    } = dadosClima;

    // Retira o estado após o hífen (se existir)
    const nomeCidade = name.split('-')[0];

    const clima = weather[0];
    const urlIcone = `${import.meta.env.VITE_OPENWEATHER_ICON_URL}${clima.icon}@2x.png`;

    if (cidadeSelecionada && nomeCidade !== cidadeSelecionada) {
        return (
            <div className={styles.loading}>
                <h2>Carregando clima de {cidadeSelecionada}...</h2>
            </div>
        );
    }

    const obterClasseClima = (tipo) => {
        const tipoClima = tipo.toLowerCase();
        if (tipoClima.includes("rain")) return styles.chuva;
        if (tipoClima.includes("cloud")) return styles.nublado;
        if (tipoClima.includes("clear")) return styles.ensolarado;
        if (tipoClima.includes("snow")) return styles.neve;
        if (tipoClima.includes("mist") || tipoClima.includes("fog")) return styles.neblina;
        return styles.default;
    };

    const classeClima = obterClasseClima(clima.main);

    return (
        <div className={`${styles.cardClima} ${classeClima}`}>
            <div className={styles.infoHorizontal}>
                <div className={styles.iconeCidade}>
                    <img src={urlIcone} alt={clima.description} className={styles.icone} />
                    
                </div>

                <p className={styles.temperaturaAtual}>
                    <FontAwesomeIcon icon={faThermometerHalf} /> {main.temp}°C
                </p>

                <div className={styles.outrosDados}>
                    <p className={styles.infoItem}>
                        <FontAwesomeIcon icon={faTemperatureArrowUp} /> Máx: {main.temp_max}°C
                    </p>
                    <p className={styles.infoItem}>
                        <FontAwesomeIcon icon={faTemperatureArrowDown} /> Mín: {main.temp_min}°C
                    </p>
                    <p className={styles.infoItem}>
                        <FontAwesomeIcon icon={faWind} /> Vento: {wind.speed} m/s
                    </p>
                    <p className={styles.infoItem}>
                        <FontAwesomeIcon icon={faDroplet} /> Umidade: {main.humidity}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export { CardClima };
