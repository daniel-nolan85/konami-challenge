import { useState } from 'react';
import '../styles/login.styles.css';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  // State for username, password and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mock valid credentials for demonstration
  const validUser = { username: 'user', password: 'test123' };

  // Function to validate user input and handle login logic
  const handleLogin = () => {
    // Trim whitespace from inputs
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError('Please enter both username and password.');
      return;
    }

    if (
      trimmedUsername === validUser.username &&
      trimmedPassword === validUser.password
    ) {
      onLoginSuccess();
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  // Clear error message when user starts typing
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error) setError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  return (
    // Show either login form or login success message
    <>
      {/* Login form */}
      {error && (
        <p className='error-message' role='alert'>
          {error}
        </p>
      )}
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type='text'
          placeholder='Username'
          aria-label='Username'
          value={username}
          onChange={handleUsernameChange}
          autoFocus
        />
        <input
          type='password'
          placeholder='Password'
          aria-label='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
};

export default LoginForm;
