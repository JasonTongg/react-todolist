import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const TodoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  label {
    color: var(--primaryColor);
    font-weight: bolder;
    font-size: 1.1rem;
    text-transform: capitalize;

    &.active {
      text-decoration: line-through;
    }
  }
`;
