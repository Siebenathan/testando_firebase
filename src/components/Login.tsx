import { useState } from 'react';
import from './Login.module.css';

export default function Login() {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  function enviarFormulario(e) {
    e.preventDefault();
    console.log(`${usuario}, ${senha}`);
  }

  return (
    <form onSubmit={enviarFormulario}>
      <div>
        <label htmlFor="userName">Usuario: </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={usuario}
          placeholder="Digite seu nome de usuário..."
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userPassword">Senha: </label>
        <input
          type="password"
          id="userPassword"
          name="userPassword"
          value={senha}
          placeholder="Digite sua senha..."
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Enviar Formulário</button>
    </form>
  );
}
