export default function Login() {
  return (
    <form>
      <div>
        <label htmlFor="userName">Usuario: </label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Digite seu nome de usuário..."
        />
      </div>
      <div>
        <label htmlFor="userPassword">Senha: </label>
        <input
          type="password"
          id="userPassword"
          name="userPassword"
          placeholder="Digite sua senha..."
        />
      </div>
    </form>
  );
}
