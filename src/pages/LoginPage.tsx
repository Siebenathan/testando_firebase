import Login from '../components/Login';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
