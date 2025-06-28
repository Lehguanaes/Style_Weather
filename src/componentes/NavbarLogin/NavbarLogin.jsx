import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAppContext } from "../../hooks/useAppContext";
import styles from "./NavbarLogin.module.css";
import homeIcon from "../../assets/icones/change.png";
import helpImg from '../../assets/icones/help.png';

import { FiltroCidade } from "../../componentes/FiltroCidade/FiltroCidade";

const NavbarLogin = () => {
  const {
    logo,
    setUsuarioLogado,
    profileImage,
  } = useAppContext();

  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserMenuToggle = () => setUserMenuOpen(prev => !prev);

  const handleEditProfile = () => {
    navigate('/editar-perfil');
    setUserMenuOpen(false);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("userId");
      setUsuarioLogado(false);
      navigate('/');
    } catch (error) {
      console.error("Erro ao sair:", error.message);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
        onClick={() => { navigate('/inicial'); window.location.reload(); }}
        title='Clique para voltar à página inicial'
      />

      <div className={styles.searchCityContainer}>
        <FiltroCidade isNavbar={true} />
        <Search size={18} className={styles.searchIcon} />
      </div>

      <div className={styles.rightSide}>
        <button
          className={styles.iconOnlyBtn}
          onClick={() => { navigate('/inicial'); window.location.reload(); }}
          title='Página inicial'
        >
          <img src={homeIcon} alt="Início" className={styles.icon} />
        </button>

        <button
          className={styles.iconOnlyBtn}
          onClick={() => navigate('/sobre-nos')}
          title='Sobre nós'
        >
          <img src={helpImg} alt="Sobre nós" className={styles.icon} />
        </button>

        <div className={styles.userSection} ref={menuRef}>
          <img
            src={profileImage}
            alt="Perfil"
            className={styles.userIcon}
            onClick={handleUserMenuToggle}
            title='Perfil do usuário'
          />
          {isUserMenuOpen && (
            <div className={styles.userDropdown}>
              <button onClick={handleEditProfile}>Editar Perfil</button>
              <button onClick={handleLogout}>Sair</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { NavbarLogin };
