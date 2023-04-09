import { useState } from 'react';
import styled from 'styled-components';

const TodoItem = ({ value, onDeleteTodo, onUpdateTodo }) => {
  const { id, todo, isCompleted } = value;
  const [inputTodo, setInputTodo] = useState(todo);
  const [isModify, setIsModify] = useState(false);

  const onModifyHandler = () => {
    setIsModify((_isModify) => !_isModify);
  };

  const onCompleteHandler = (e) => {
    const { checked } = e.target;
    onUpdateTodo(id, inputTodo, checked);
  };

  const onUpdate = () => {
    onUpdateTodo(id, inputTodo, isCompleted);
    setIsModify(false);
  };

  return (
    <StLi>
      {isModify ? (
        <>
          <StInputLabel>
            <input type='checkbox' onChange={onCompleteHandler} />
            <input
              value={inputTodo}
              onChange={(e) => {
                setInputTodo(e.target.value);
              }}
              data-testid='modify-input'
            />
          </StInputLabel>
          <StTodoButton data-testid='submit-button' onClick={onUpdate}>
            제출
          </StTodoButton>
          <StTodoButton data-testid='cancel-button' onClick={onModifyHandler}>
            취소
          </StTodoButton>
        </>
      ) : (
        <>
          <StInputLabel>
            <input
              type='checkbox'
              checked={isCompleted}
              onChange={onCompleteHandler}
            />
            <span>{todo}</span>
          </StInputLabel>
          <StTodoButton
            data-testid='modify-button'
            value={id}
            onClick={onModifyHandler}
          >
            수정
          </StTodoButton>
          <StTodoButton
            data-testid='delete-button'
            value={id}
            onClick={onDeleteTodo}
          >
            삭제
          </StTodoButton>
        </>
      )}
    </StLi>
  );
};
export default TodoItem;

const StLi = styled.li`
  margin-bottom: 16px;
`;

const StInputLabel = styled.label`
  margin-right: 8px;
`;

const StTodoButton = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
`;
