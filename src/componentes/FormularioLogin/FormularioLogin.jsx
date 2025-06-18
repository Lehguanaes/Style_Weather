import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from './FormularioLogin.module.css';
import usuario from '../../assets/icones/usuario.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { verificarSenha } from '../../services/Auth';
import { SweetAlert } from '../SweetAlert';
import { AppContext } from "../../context/AppContext";
import { Eye, EyeOff } from 'react-feather';
import { Link } from "react-router-dom";

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [estaLogando, setEstaLogando] = useState(false);
  const { setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setEstaLogando(true);

    if (!email || !senha) {
      setMensagem("Por favor, preencha todos os campos.");
      setEstaLogando(false);
      return;
    }

    const auth = getAuth();
    const db = getFirestore();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      localStorage.setItem("userId", user.uid);

      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const dadosUsuario = docSnap.data();
        const senhaCorreta = await verificarSenha(senha, dadosUsuario.senha);

        if (senhaCorreta) {
    setUserData(dadosUsuario);
await SweetAlert.successPerfil("Login bem-sucedido!");

setTimeout(() => {
  navigate("/editar-perfil", {
    state: { fromLogin: true },
    replace: true
  });
}, 500); 
        } else {
          await SweetAlert.error("Senha incorreta.", { duration: 5000 });
        }
      } else {
        await SweetAlert.error("Usuário não encontrado.", { duration: 5000 });
      }
    } catch (error) {
      await SweetAlert.error("Email ou senha inválidos.", { duration: 5000 });
    } finally {
      setEstaLogando(false);
      setEmail("");
      setSenha("");
    }
  };

  const togglePasswordVisibility = () => setSenhaVisivel(!senhaVisivel);

  return (
    <div className={style.background}>
      <div className={style.cardLogin}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>LOGIN</h1>
          <img src={usuario} alt="Ajuda" className={style.user} />
        </div>

        <form onSubmit={handleLogin} className={style.inputs}>
          <div className={style.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="exemplo@dominio.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={style.formGroup}>
            <label>Senha:</label>
            <div className={style.passwordWrapper}>
              <input
                type={senhaVisivel ? "text" : "password"}
                value={senha}
                placeholder="Insira a sua senha"
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <div className={style.eyeIcon} onClick={togglePasswordVisibility}>
                {senhaVisivel ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>
          <p>Não possui cadastro? <Link to="/cadastrar">Cadastre-se!</Link></p>

          <button type="submit">Entrar</button>
          {mensagem && <p className={style.mensagem}>{mensagem}</p>}
        </form>
      </div>
    </div>
  );
};

export { FormularioLogin };