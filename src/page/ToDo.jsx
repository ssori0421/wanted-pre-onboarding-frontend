import React, { useCallback, useEffect, useState } from 'react';
import useRedirect from '../hooks/useRedirect';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../service/todo';
import TodoItem from '../components/TodoItem';

const ToDo = () => {
  const [todoList, setTodoList] = useState();
  const [todoInput, setTodoInput] = useState('');
  useRedirect();

  const getTodoList = useCallback(async () => {
    const data = await getTodo();
    setTodoList(data);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const onSubmitTodo = async (e) => {
    e.preventDefault();
    const body = {
      todo: todoInput,
    };
    try {
      const data = await createTodo(body);
      setTodoInput('');
      setTodoList([...todoList, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdateTodo = async (id, todo, isCompleted) => {
    const body = {
      todo,
      isCompleted,
    };
    await updateTodo(id, body);
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, todo, isCompleted };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };

  const onDeleteTodo = async (e) => {
    const id = Number(e.target.value);
    try {
      await deleteTodo(id);
      const filteredTodo = todoList.filter((todo) => todo.id !== id);
      setTodoList(filteredTodo);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeInputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <PageLayout title={'Todo'}>
      <StTodoContainer>
        <StFormContainer onSubmit={onSubmitTodo}>
          <StInput value={todoInput} onChange={onChangeInputHandler} />
          <StTodoButton type='submit'>등록</StTodoButton>
        </StFormContainer>
        <StTodoListContainer>
          <StUl>
            {todoList &&
              todoList.map((v) => (
                <TodoItem
                  key={v.id}
                  value={v}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={onUpdateTodo}
                />
              ))}
          </StUl>
        </StTodoListContainer>
      </StTodoContainer>
    </PageLayout>
  );
};

export default ToDo;

const StTodoContainer = styled.div`
  width: 380px;
`;
const StFormContainer = styled.form`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
const StInput = styled.input`
  padding: 8px 15px 9px;
  width: 280px;
  border-bottom: 1px solid #000;
`;
const StUl = styled.ul`
  margin-top: 16px;
`;

const StTodoListContainer = styled.div`
  padding: 8px;
`;
const StTodoButton = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
`;
