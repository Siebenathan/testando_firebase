import styles from './Login.module.css';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../services/firebase';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Login() {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [userId, setUserId] = useLocalStorage('userId', '');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    signIn(usuario, senha)
      .then((credentials) => {
        alert('Bem-vindo!');
        console.log(credentials.user.uid);
        setUserId(credentials.user.uid);
      })
      .catch((err) => {
        console.log(err);
        alert('Usuário ou senha estão incorretos!');
      });
  }

  return (
    <div className={styles.loginContainer}>
      <h1 className="teste">Login</h1>
      <form onSubmit={handleLogin} className={styles.formContainer}>
        <div>
          <div>
            <label htmlFor="userName">Usuario: </label>
          </div>
          <input
            type="text"
            id="userName"
            name="userName"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="userPassword">Senha: </label>
          </div>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.acessButton}>
          Acessar
        </button>
        <button type="submit" className={styles.createButton}>
          Criar conta
        </button>
      </form>
      <Link to="/">Ir para a home</Link>
    </div>
  );
}
