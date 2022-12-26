import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: fit-content;
  background-color: white;
`;

export const InputContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: auto 50px;
  gap: 0.5rem;
  margin-top: 1rem;

  input {
    text-align: center;
    border: 1px solid var(--primaryColor);
    outline: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }

  button {
    height: 100%;
    font-size: 2rem;
    color: white;
    background-color: var(--primaryColor);
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;

  & > * {
    width: 100%;
  }

  p {
    text-align: center;
  }

  button {
    background-color: var(--primaryColor);
    color: white;
    border: none;
    outline: none;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
  }
`;
