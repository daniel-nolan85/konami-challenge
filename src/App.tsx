import { useState } from 'react';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <Tasks />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default App;
