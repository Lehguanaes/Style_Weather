import React, { useState, useEffect } from 'react';
import styles from './Rodape.module.css';
import logo from '../../assets/logo/logo_sobre_nos.png';
import { Link, useLocation } from 'react-router-dom';

const Rodape = () => {
    const [mensagem, setMensagem] = useState('');
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const handleEnviarEmail = () => {
        const email = 'styleweatherinfo@gmail.com';
        const assunto = encodeURIComponent('Comentário do usuário');
        const corpo = encodeURIComponent(mensagem);
        window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.coluna}>
                    <img src={logo} alt="Logo StyleWeather" className={styles.logo} />
                </div>
                <div className={styles.coluna}>
                    <h4>Navegue pelo site</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre-nos">Sobre a Style Weather</Link></li>
                    </ul>
                </div>
                <div className={styles.coluna}>
                    <h4>Contate-nos</h4>
                    <textarea
                        className={styles.textarea}
                        rows="2"
                        placeholder="Digite sua mensagem..."
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                    <button className={styles.botao} onClick={handleEnviarEmail}>
                        Enviar
                    </button>
                </div>
            </div>
            <div className={styles.direitos}>
                <p>&copy; 2025 StyleWeather. Todos os direitos reservados.</p>
                <p>ETEC da Zona Leste - 3° DS (AMS)</p>
            </div>
        </footer>
    );
};

export { Rodape };
