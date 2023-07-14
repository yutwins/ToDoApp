import React from 'react';

export const IncompleteTodo = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul className="incomplete-ul">
            {todos.map((todo, index) => {
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
    );
}