import { FormEvent, useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    signInWithEmailAndPassword();
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
      </form>
      <Link to="/">Ir para a home</Link>
    </div>
  );
}
