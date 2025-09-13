import { useState } from 'react';
import logo from '../assets/logo.png';
import LoginForm from '../components/LoginForm';
import '../styles/login.styles.css';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login = ({ onLoginSuccess }: LoginProps) => {
  // State for login success
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    // Show either login form or login success message
    <>
      {loginSuccess ? (
        <div className='login-success-container'>
          <div className='login-success-message'>Login Successful</div>
        </div>
      ) : (
        <div className='login-container'>
          <img src={logo} alt='Logo' className='login-logo' />

          <h1 className='login-title'>KONAMI CODERS</h1>

          {/* Login form */}
          <LoginForm
            onLoginSuccess={() => {
              setLoginSuccess(true);
              // Delay navigation to show login success message briefly
              setTimeout(() => onLoginSuccess(), 1500);
            }}
          />
          <a
            href='#'
            className='forgot-password'
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </a>
        </div>
      )}
    </>
  );
};

export default Login;
