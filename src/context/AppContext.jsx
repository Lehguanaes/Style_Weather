import React, { createContext, useState, useEffect } from 'react';
import logoImg from '../assets/logo/logo.png';
import usuario from '../assets/icones/usuario.png';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom"; 

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tipoLook, setTipoLook] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [profileImage, setProfileImage] = useState(logoImg);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento

  const auth = getAuth();
  const db = getFirestore();

  const alternarMenu = () => setMenuAberto(prev => !prev);

  const resetAppContext = () => {
    setUsuarioLogado(false);
    setTipoLook("");
    setCidadeSelecionada("");
    setLugarSelecionado("");
    setDadosClima(null);
    setProfileImage(logoImg);
    setUserData(null);
  };

  useEffect(() => {
    const carregarDadosUsuario = async (user) => {
      setLoading(true);
      try {
        if (user) {
          const docRef = doc(db, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserData(userData);
            setTipoLook(userData.tipoLook || "");
            
            // Atualiza a cidade apenas se não estiver na página de login
            if (!window.location.pathname.includes('/login')) {
              setCidadeSelecionada(userData.cidade || "");
            }
            
            setProfileImage(userData.profileImage || usuario);
            setUsuarioLogado(true);
          }
        } else {
          resetAppContext();
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, carregarDadosUsuario);
    return () => unsubscribe();
  }, [auth, db]);

  return (
    <AppContext.Provider
      value={{
        logo: logoImg,
        menuAberto,
        alternarMenu,
        tipoLook,
        setTipoLook,
        cidadeSelecionada,
        setCidadeSelecionada,
        lugarSelecionado,
        setLugarSelecionado,
        dadosClima,
        setDadosClima,
        usuarioLogado,
        setUsuarioLogado,
        profileImage,
        setProfileImage,
        resetAppContext,
        userData,
        setUserData,
        loading
      }}
    >
      {!loading && children}
    </AppContext.Provider>
  );
};