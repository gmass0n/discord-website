import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    align-items: center;

    width: 100%;
    max-width: 1180px;
    height: 80px;

    svg {
      color: ${({ theme }) => theme.colors.white};
      height: 43px;
      cursor: pointer;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          margin: 10px;
          padding: 10px;
          color: ${({ theme }) => theme.colors.white};
          font-size: 14px;
          font-weight: 600;
          text-align: center;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    ul + a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 40px;
      font-size: 13px;
      padding: 0 15px;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.text};
      font-weight: 500;
      margin-left: auto;
      height: 38px;

      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        color: ${({ theme }) => theme.colors.brand};
      }
    }
  }
`;
