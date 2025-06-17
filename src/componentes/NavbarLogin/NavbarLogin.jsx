import React, { useState, useEffect, useRef } from 'react';
import { X } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAppContext } from "../../hooks/useAppContext";
import styles from "./NavbarLogin.module.css";
import homeIcon from "../../assets/icones/inicial.png";
import helpImg from '../../assets/icones/help.png';

const NavbarLogin = () => {
  const {
    logo,
    setUsuarioLogado, // Pegando o setUsuarioLogado do contexto
    profileImage
  } = useAppContext();  // Garantindo o uso do contexto

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
      await signOut(auth);  // Fazendo o logout do Firebase
      localStorage.removeItem("userId");  // Removendo o ID do usuário do localStorage
      setUsuarioLogado(false);  // Alterando o estado de login via contexto
      navigate('/');  // Redirecionando para a página inicial
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
        onClick={() => { navigate('/'); window.location.reload(); }}
        title='Clique para voltar à página inicial'
      />

      <div className={styles.rightSide}>
        {/* Botão para Home */}
        <button
          className={styles.iconOnlyBtn}
          onClick={() => { navigate('/'); window.location.reload(); }}
          title='Página inicial'
        >
          <img src={homeIcon} alt="Início" className={styles.icon} />
        </button>

        {/* Botão para Sobre Nós */}
        <button
          className={styles.iconOnlyBtn}
          onClick={() =>  navigate('/sobre-nos') }
          title='Sobre nós'
        >
          <img src={helpImg} alt="Sobre nós" className={styles.icon} />
        </button>

        {/* Ícone do usuário */}
        <div className={styles.userSection} ref={menuRef}>
          <img
            src={profileImage || usuario}
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