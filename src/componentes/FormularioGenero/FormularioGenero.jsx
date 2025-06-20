import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import style from "./FormularioGenero.module.css";
import { criptografarSenha } from "../../services/Auth";
import { SweetAlert } from "../SweetAlert";
import CreatableSelect from "react-select/creatable";
import { AppContext } from "../../context/AppContext";

// Ícones de tipo de looks
import femininoImg from "../../assets/icones/icone_femininas.png";
import masculinoImg from "../../assets/icones/icone_masculinas.png";
import neutroImg from "../../assets/icones/icone_neutras.png";


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

const FormularioGenero = () => {
  const [tipoLook, setTipoLook] = useState("");
  const [cidade, setCidade] = useState(""); // Estado para a cidade
  const [opcoesCidades, setOpcoesCidades] = useState(cidadesIniciais);
  const navigate = useNavigate();
  const { setCidadeSelecionada } = useContext(AppContext); 

  const opcoesLook = [
    { id: "feminino", rotulo: "Roupas Femininas", imagem: femininoImg },
    { id: "masculino", rotulo: "Roupas Masculinas", imagem: masculinoImg },
    { id: "neutro", rotulo: "Roupas Neutras", imagem: neutroImg },
  ];

  
  const handleCreateCidade = (inputValue) => {
    const novaOpcao = { label: inputValue, value: inputValue };
    setOpcoesCidades((prev) => [...prev, novaOpcao]);
    setCidade(inputValue);
    setCidadeSelecionada(inputValue); 
  };

  const handleCadastrar = async () => {
    const nome = localStorage.getItem("cadastroNome");
    const email = localStorage.getItem("cadastroEmail");
    const senha = localStorage.getItem("cadastroSenha");

    if (!tipoLook || !cidade) {
      SweetAlert.error("Preencha todos os campos obrigatórios.", {
        iconColor: "#800080",
      });
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      const senhaCriptografada = await criptografarSenha(senha);

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        email,
        senha: senhaCriptografada,
        tipoLook,
        cidade, // Armazena a cidade no Firebase
      });

      SweetAlert.success("Cadastro concluído!", { iconColor: "#800080" });
      navigate("/");
    } catch (error) {
      SweetAlert.error(`Erro: ${error.message}`, { iconColor: "#800080" });
    }
  };

  return (
    <div className={style.background}>
      <div className={style.cardCadastro}>
        <div className={style.container}>
          <h2>Qual estilo de roupa você prefere?</h2>

          {/* Select de Cidades (reutilizado) */}
          <div className={style.campoCidade}>
            <label>
              <strong>Sua cidade:</strong>
            </label>
            <CreatableSelect
              options={opcoesCidades}
              onChange={(opcao) => setCidade(opcao ? opcao.value : "")}
              onCreateOption={handleCreateCidade}
              value={cidade ? { label: cidade, value: cidade } : null}
              placeholder="Selecione ou digite sua cidade"
              isClearable
              classNamePrefix="select"
            />
          </div>

          {/* Opções de look (existente) */}
          <div className={style.opcoesContainer}>
            {opcoesLook.map((opcao) => (
              <div
                key={opcao.id}
                className={`${style.opcao} ${tipoLook === opcao.id ? style.selecionado : ""}`}
                onClick={() => setTipoLook(opcao.id)}
              >
                <img src={opcao.imagem} alt={opcao.rotulo} className={style.icone} />
                <span>{opcao.rotulo}</span>
              </div>
            ))}
          </div>

          <button onClick={handleCadastrar} className={style.botaoCadastrar}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export { FormularioGenero };