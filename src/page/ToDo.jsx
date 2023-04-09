import React, { useCallback, useEffect, useState } from 'react';
import useRedirect from '../hooks/useRedirect';
import PageLayout from '../components/PageLayout';
import { getTodo } from '../service/todo';

const ToDo = () => {
  const [todoList, setTodoList] = useState();
  useRedirect();

  const getTodoList = useCallback(async () => {
    const data = await getTodo();
    setTodoList(data);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return <PageLayout title={'Todo'}></PageLayout>;
};

export default ToDo;
