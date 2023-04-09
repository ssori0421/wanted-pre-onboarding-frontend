import React, { useEffect, useState } from 'react';
import { regex } from '../util/regex';
import styled from 'styled-components';
import { useRouter } from '../hooks/useRouter';
import { routePath } from '../routes';
import { postSignUp } from '../service/auth';

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
  const { routeTo } = useRouter();

  useEffect(() => {
    if (formState.email.isVailed && formState.password.isVailed) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formState]);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: formState.email.value,
      password: formState.password.value,
    };
    try {
      await postSignUp(body);
      routeTo(routePath.signin);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <StTitle>회원가입</StTitle>
      <StInputForm onSubmit={onSubmit}>
        <p>이메일</p>
        <StInput
          placeholder='아이디를 입력해 주세요.'
          type='email'
          data-testid='email-input'
          value={formState.email.value}
          onChange={onEmailChange}
        />
        <StMessage>'@'를 포함해서 이메일을 작성해 주세요.</StMessage>
        <p>비밀번호</p>
        <StInput
          placeholder='비밀번호를 입력해 주세요.'
          type='password'
          data-testid='password-input'
          value={formState.password.value}
          onChange={onPasswordChange}
        />
        <StMessage>비밀번호는 8자 이상 작성해 주세요.</StMessage>
        <Button disabled={isDisabled} data-testid='signup-button'>
          회원가입
        </Button>
      </StInputForm>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
const StTitle = styled.h2`
  margin: 16px 0px 48px;
`;
const StInputForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  gap: 10px;
`;

const StInput = styled.input`
  padding: 8px 15px 9px;
  border-bottom: 1px solid #000;
`;

const StMessage = styled.p`
  color: #35c5f0;
`;

const Button = styled.button`
  height: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? 'grey' : '#35c5f0')};
`;
