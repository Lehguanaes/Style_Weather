import { UserPlus } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './Navbar.module.css';
import homeIcon from "../../assets/icones/inicial.png";
import loginIcon from '../../assets/icones/login.png'; 
import helpImg from '../../assets/icones/help.png';

const Navbar = () => {
  const { logo } = useAppContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
        onClick={() => {
          navigate('/');
          window.location.reload();
        }}
      />

      <div className={styles.buttons}>
        {/* Botão com texto (desktop) */}
        <button
          onClick={() => navigate('/login')}
          className={`${styles.customBtn} ${styles.hideOnMobile}`}
        >
          Login
        </button>

        {/* Ícone (mobile) */}
        <button
          onClick={() => navigate('/login')}
          className={`${styles.iconOnlyBtn} ${styles.showOnMobile}`}
          title="Login-se"
        >
          <img src={loginIcon} alt="Login" className={styles.icon} />
        </button>
        {/* Login (mobile) */}

        {/* Início */}
        <button
          className={styles.iconOnlyBtn}
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
          title="Página inicial"
        >
          <img src={homeIcon} alt="Início" className={styles.icon} />
        </button>

        {/* Sobre nós */}
        <button
          onClick={() => navigate('/sobre-nos')}
          className={styles.iconOnlyBtn}
          title="Sobre nós"
        >
          <img src={helpImg} alt="Sobre nós" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };