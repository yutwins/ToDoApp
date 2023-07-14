import React from 'react';

export const CompleteTodo = (props) => {
    const {todos, onClickBack} = props;
    return (
    <div className="complete-area">
          <p className="title">完了のToDo</p>
          <ul className="complete-ul">
            {todos.map((todo, index) => {
              return (
                <li key={todo} className="complete-list">
                    <p className="complete-list__text">{todo}</p>
                    <button onClick={() => onClickBack(index)}>戻す</button>
                </li>
              );
            })}
          </ul>
      </div>
    );
}