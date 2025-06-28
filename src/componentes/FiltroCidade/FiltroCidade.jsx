import React, { useContext, useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { AppContext } from "../../context/AppContext";
import styles from './FiltroCidade.module.css';
import { useLocation } from "react-router-dom";

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

const FiltroCidade = ({ isNavbar = false }) => {
  const location = useLocation();
  const {
    cidadeSelecionada,
    setCidadeSelecionada,
    userData,
    loading
  } = useContext(AppContext);

  const [opcoes, setOpcoes] = useState(cidadesIniciais);

  useEffect(() => {
    if (!loading && userData?.cidade && !location.pathname.includes('/login')) {
      if (!opcoes.some(opcao => opcao.value === userData.cidade)) {
        setOpcoes(prev => [...prev, {
          label: userData.cidade,
          value: userData.cidade
        }]);
      }
      setCidadeSelecionada(userData.cidade);
    }
  }, [userData, loading, location.pathname, opcoes, setCidadeSelecionada]);

  const handleSelect = (opcaoSelecionada) => {
    const cidade = opcaoSelecionada ? opcaoSelecionada.value : "";
    setCidadeSelecionada(cidade);
  };

  const handleCreate = (inputValue) => {
    const novaOpcao = { label: inputValue, value: inputValue };
    setOpcoes(prev => [...prev, novaOpcao]);
    setCidadeSelecionada(inputValue);
  };

  return (
    <div
      className={
        isNavbar
          ? styles.filtroContainerNavbar
          : styles.filtroContainer
      }
    >
      {!isNavbar && (
        <label className={styles.filtroLabel} htmlFor="cidade-select">
          <strong>Cidade:</strong>
        </label>
      )}
      <div className={styles.selectContainer}>
        <CreatableSelect
          inputId="cidade-select"
          options={opcoes}
          onChange={handleSelect}
          onCreateOption={handleCreate}
          value={cidadeSelecionada ? {
            label: cidadeSelecionada,
            value: cidadeSelecionada
          } : null}
          placeholder={isNavbar ? "Cidade" : "Selecione ou digite uma cidade"}
          isClearable
          classNamePrefix="select"
          menuPlacement="auto"
          maxMenuHeight={200}
          styles={{
            menuPortal: base => ({ ...base, zIndex: 9999 }) // Pra garantir menu no topo
          }}
          menuPortalTarget={document.body}
        />
      </div>
    </div>
  );
};

export { FiltroCidade };
