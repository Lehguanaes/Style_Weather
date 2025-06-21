import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { SweetAlert } from "../SweetAlert"; 
import style from "./FormularioPerfil.module.css";
import usuario from "../../assets/icones/usuario.png";

const FormularioPerfil = () => {
  const [userData, setUserData] = useState({
    nome: "",
  email: "",
  tipoLook: "",
  profileImage: "",
  cidade: "",
  originalNome: "",
  originalTipoLook: "",
  originalProfileImage: "",
  originalCidade: ""
  });

  const cidadesIniciais = [
  { label: "Aracaju", value: "Aracaju" },
  { label: "Belo Horizonte", value: "Belo Horizonte" },
  { label: "Belém", value: "Belém" },
  { label: "Brasília", value: "Brasília" },
  { label: "Campinas", value: "Campinas" },
  { label: "Curitiba", value: "Curitiba" },
  { label: "Cuiabá", value: "Cuiabá" },
  { label: "Fortaleza", value: "Fortaleza" },
  { label: "Goiânia", value: "Goiânia" },
  { label: "João Pessoa", value: "João Pessoa" },
  { label: "Maceió", value: "Maceió" },
  { label: "Manaus", value: "Manaus" },
  { label: "Natal", value: "Natal" },
  { label: "Porto Alegre", value: "Porto Alegre" },
  { label: "Recife", value: "Recife" },
  { label: "Rio de Janeiro", value: "Rio de Janeiro" },
  { label: "São Luís", value: "São Luís" },
  { label: "São Paulo", value: "São Paulo" },
  { label: "Teresina", value: "Teresina" }
];

  const [profileImage, setProfileImage] = useState('');
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserData({
            nome: userData.nome,
            email: user.email,
            tipoLook: userData.tipoLook || "",
            cidade: userData.cidade || "",
            profileImage: userData.profileImage || "",
            originalNome: userData.nome,
            originalTipoLook: userData.tipoLook || "",
            originalProfileImage: userData.profileImage || "",
            originalCidade: userData.cidade || ""
          });
          setProfileImage(userData.profileImage || "");
        }
      }
    };

    fetchUserData();
  }, [auth, db]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAtualizar = async () => {
    try {
      const user = auth.currentUser;
      const docRef = doc(db, "usuarios", user.uid);

      // Verificar se houve alterações nos dados
      const updatedData = {};

      if (userData.nome !== userData.originalNome) updatedData.nome = userData.nome;
      if (userData.tipoLook !== userData.originalTipoLook) updatedData.tipoLook = userData.tipoLook;
      if (userData.cidade !== userData.originalCidade) {
        updatedData.cidade = userData.cidade;
      }
      // Verifica se a imagem foi alterada, caso contrário, usa a imagem padrão
      if (profileImage !== userData.originalProfileImage) {
        updatedData.profileImage = profileImage || {usuario};
      }
      // Se houver alterações, realizar a atualização
      if (Object.keys(updatedData).length > 0) {
        await updateDoc(docRef, updatedData);
        SweetAlert.successPerfil("Perfil atualizado com sucesso!"); 
      } else {
        SweetAlert.error("Nenhuma alteração foi feita.");
      }
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error.message);
      SweetAlert.error("Erro ao atualizar o perfil.");
    }
  };

  return ( 
    <div className={style.background}>
      <div className={style.cardPerfil}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>PERFIL</h1>
          <div className={style.imagemPerfilContainer}>
            <img
              src={profileImage || usuario}
              alt=""
              className={style.imagemPerfil}
            />
            <label htmlFor="fileUpload" className={style.uploadButton}>
              Escolher imagem
            </label>
            <input
              type="file"
              id="fileUpload"
              name="profileImage"
              accept="image/*"
              onChange={handleFotoChange}
              className={style.uploadInput}
            />
          </div>
        </div>
        <div className={style.inputs}>
          <label className={style.label}>Email:</label>
          <input
            className={`${style.inputsPerfil} ${style.email}`}
            type="email"
            name="email"
            value={userData.email}
            disabled
          /> 
          <label className={style.label}>Nome:</label>
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleInputChange}
          />
          <label className={style.label}>Cidade:</label>
          <input
            list="lista-cidades"
            name="cidade"
            value={userData.cidade}
            onChange={handleInputChange}
            className={style.inputsPerfil}
          />
          <datalist id="lista-cidades">
            <option value="São Paulo" />
            <option value="Rio de Janeiro" />
            <option value="Belo Horizonte" />
            <option value="Porto Alegre" />
            <option value="Curitiba" />
            <option value="Salvador" />
            <option value="Recife" />
            <option value="Fortaleza" />
            <option value="Manaus" />
            <option value="Brasília" />
          </datalist>
          <label className={style.label}>Estilo de Roupa:</label>
          <select
            name="tipoLook"
            value={userData.tipoLook}
            onChange={handleInputChange}
            className={style.select}
          >
            <option value="">Selecione um estilo:</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="neutro">Neutro</option>
          </select>
          <button onClick={handleAtualizar}>Atualizar</button>
        </div>
      </div>
    </div>
  );
};

export { FormularioPerfil };