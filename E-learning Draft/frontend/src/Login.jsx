import './App.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password" />
      <a href="#" className="forgot-password">Forgot password?</a>
      <button className="login-btn">Play now</button>
      <p>Don't have an account?</p>
      <a href="/register">Register</a>
    </div>
  );
}

export default Login;
