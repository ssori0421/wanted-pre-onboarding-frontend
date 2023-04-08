import React, { useState } from 'react';
import { regex } from '../util/regex';

const SignUp = () => {
  const [formState, setFormState] = useState({
    email: {
      value: '',
      isVailed: false,
    },
    password: {
      value: '',
      isVailed: false,
    },
  });
  const [isDisabled, setIsDisabled] = useState(true);

  console.log('formState', formState);

  const onEmailChange = (e) => {
    const { value } = e.target;
    const isVailed = regex.email.test(value);
    setFormState({ ...formState, email: { value, isVailed } });
  };
  const onPasswordChange = (e) => {
    const { value } = e.target;
    const isVailed = regex.password.test(value);
    setFormState({
      ...formState,
      password: { value, isVailed },
    });
  };

  return (
    <div>
      <input
        type='email'
        data-testid='email-input'
        value={formState.email.value}
        onChange={onEmailChange}
      />
      <input
        type='password'
        data-testid='password-input'
        value={formState.password.value}
        onChange={onPasswordChange}
      />
      <button data-testid='signup-button'>회원가입</button>
    </div>
  );
};

export default SignUp;
