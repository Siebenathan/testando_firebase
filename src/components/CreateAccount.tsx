import styles from './CreateAccount.module.css';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/firebase';

export default function Login() {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const nav = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    createUser(usuario, senha)
      .then((credentials) => {
        alert('Conta criada!');
        nav('/login');
        console.log(JSON.stringify(credentials));
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao cadastrar!');
      });
  }

  return (
    <div className={styles.loginContainer}>
      <h1 className="teste">Criar conta</h1>
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
          Criar
        </button>
        <Link className={styles.createButton} to="/login">
          Ir para o Login
        </Link>
      </form>
      <Link to="/">Ir para a home</Link>
    </div>
  );
}
