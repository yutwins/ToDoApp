import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [todoText, setTodoText]  = useState('');
  const [incompleteTodos, setIncompleteTodos] = React.useState([
    '夜ご飯作る',
    '洗濯する'
  ]);
  const [completeTodos, setCompleteTodos] = React.useState(['テスト']);

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
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul className="incomplete-ul">
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo} className="incomplete-list">
                    <p className="incomplete-list__text">{todo}</p>
                    {/* 関数に引数を渡す場合はアロー関数で書く */}
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="complete-area">
          <p className="title">完了のToDo</p>
          <ul className="complete-ul">
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo} className="complete-list">
                    <p className="complete-list__text">{todo}</p>
                    <button onClick={() => onClickBack(index)}>戻す</button>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
};