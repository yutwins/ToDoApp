import React from 'react';
import { useState } from 'react';
import { InputTodo } from './Components/InputTodo';
import { IncompleteTodo } from './Components/IncompleteTodo';
import { CompleteTodo } from './Components/CompleteTodo';

export const App = () => {
  const [todoText, setTodoText]  = useState('');
  const [incompleteTodos, setIncompleteTodos] = React.useState([]);
  const [completeTodos, setCompleteTodos] = React.useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  }

  const onClickAdd = () => {
    if (todoText === '') return;
    // 今の未完了リストに入力したTODOを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    // 今の未完了リストから削除
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    // newTodosでsetIncompleteTodosを更新
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos =[...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{color: 'red'}}>登録できるタスクは5個までです。消化してください。</p>
      )}
      <IncompleteTodo 
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo 
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  );
};