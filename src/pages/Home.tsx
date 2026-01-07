import { login, logout } from "../services/auth";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Startive Cognito Auth Tester (DEV)</h2>
      <button onClick={login}>Login / Sign up</button>
      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
