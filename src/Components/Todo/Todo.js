import React, {useState, useRef} from 'react';
import {InputContainer, Container, Info} from './Style';
import List from '../List/List';

export default function Todo() {
  let [todo, setTodo] = useState([]);
  let inputRef = useRef();

  let submitHandler = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    setTodo((prev) => {
      return [
        ...prev,
        {text: inputRef.current.value, status: false, id: +new Date()},
      ];
    });
  };

  let RemoveChecked = () => {
    let newTodo = todo.filter((item) => item.status === false);
    setTodo(newTodo);
    document
      .querySelectorAll('input')
      .forEach((item) => (item.checked = false));
  };

  return (
    <Container>
      <h1>TODOLIST</h1>
      <InputContainer onSubmit={submitHandler}>
        <input type="text" placeholder="Add todo..." ref={inputRef} />
        <button type="submit">+</button>
      </InputContainer>
      <List todo={todo} setTodo={setTodo}></List>
      <Info>
        <p>
          {todo.filter((item) => item.status === true).length} of {todo.length}{' '}
          tasks done
        </p>
        <button onClick={RemoveChecked}>Remove Checked</button>
      </Info>
    </Container>
  );
}
