import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
    height          : 50vh;
    display         : flex;
    flex-direction  : column;

    align-items    : center;
    justify-content: center;
    color          : var(--white);

    .title {
      text-align: center;
      transform : translateY(-50%);
      max-width : 42rem;
    }

    h1 {
      font-size: 3rem;
    }

    p {
      margin-top: 1rem;
      font-size : 1.5rem;
    }
`;