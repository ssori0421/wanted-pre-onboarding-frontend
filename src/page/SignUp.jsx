import React, { useState } from 'react';

const SignUp = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const onEmailChange = (e) => {
    setFormState({ ...formState, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setFormState({ ...formState, password: e.target.value });
  };
  
  return (
    <div>
      <input
        type='email'
        data-testid='email-input'
        value={formState.email}
        onChange={onEmailChange}
      />
      <input
        type='password'
        data-testid='password-input'
        value={formState.password}
        onChange={onPasswordChange}
      />
      <button data-testid='signup-button'>회원가입</button>
    </div>
  );
};

export default SignUp;
