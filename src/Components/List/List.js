import React from 'react';
import {Container, TodoContainer} from './Style';

export default function List({todo, setTodo}) {
  let checkToggle = (id) => {
    let newTodo = [...todo];
    newTodo[id].status = !newTodo[id].status;
    setTodo(newTodo);
  };

  return (
    <Container>
      {todo.map((item, index) => (
        <TodoContainer key={index}>
          <input
            type="checkbox"
            id={index}
            onClick={() => checkToggle(index)}
          />
          <label for={index} className={item.status ? 'active' : null}>
            {item.text}
          </label>
        </TodoContainer>
      ))}
    </Container>
  );
}
