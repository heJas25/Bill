import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-container">
      {isSignIn ? (
        <SignIn onToggleForm={toggleForm} />
      ) : (
        <SignUp onToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Auth;