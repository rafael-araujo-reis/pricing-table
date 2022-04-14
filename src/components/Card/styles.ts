import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 0.5rem;

    display       : flex;
    flex-direction: column;

    background-color: var(--page-background);
    box-shadow      : 0 0 0.25rem var(--gray);

    .header {
      border-radius  : 0.5rem 0.5rem 0 0;
      padding        : 1.5rem;
      display        : flex;
      justify-content: space-between;
      align-items    : center;

      color: var(--black);

      h3 {
        font-size: 1.25rem;
      }
    }

    .best {
      background: var(--yellow);

      h3 {
        color: var(--blue);
      }

      span {
        color        : var(--white);
        background   : var(--blue);
        padding      : 0.5rem 1.25rem;
        border-radius: 5rem;
        font-size    : 0.8rem;
      }
    }

    .body {
      height  : 100%;
      padding : 1rem 2rem 2rem 2rem;
      position: relative;

      .price {
        margin-bottom: 1rem;

        h2 {
          color    : var(--black);
          font-size: 2.5rem;

          span {
            font-size: 1.5rem;
          }

          span:last-child {
            font-weight: 400;
            color      : var(--gray)
          }
        }
      }

      p {
        margin-bottom: 1rem;
      }
    }

    ul {
      /* list-style-image   : url(); */
      list-style-position: inside;

      li {

        &+li {
          margin-top: 1rem;
        }
      }
    }
`;