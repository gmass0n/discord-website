import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.text};
  padding: 90px 40px 40px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  nav {
    display: flex;
    flex-direction: row;

    > div {
      max-width: 280px;
      width: 100%;
      margin-right: 40px;

      h1 {
        color: ${({ theme }) => theme.colors.brand};
        font-weight: 600;
        font-size: 28px;
        line-height: 140%;
      }

      ul {
        display: flex;
        align-items: center;

        margin-top: 25px;

        li + li {
          margin-left: 25px;
        }

        svg {
          height: 22px;
          width: 22px;
          color: ${({ theme }) => theme.colors.white};
          cursor: pointer;
        }

        li:last-child {
          svg {
            height: 24px;
            width: 24px;
          }
        }
      }
    }

    > ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;

      flex: 1;

      ul {
        &:before {
          content: attr(aria-label);
          color: ${({ theme }) => theme.colors.brand};
          font-size: 15px;
        }

        li {
          margin-top: 15px;

          a {
            color: ${({ theme }) => theme.colors.white};
            font-size: 15px;
            opacity: 0.9;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  hr {
    background: ${({ theme }) => theme.colors.brand};
    width: 100%;
    height: 1px;
    margin: 40px 0;
    border: none;
  }

  hr + div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      color: ${({ theme }) => theme.colors.white};
      height: 43px;
      cursor: pointer;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 40px;
      font-size: 13px;
      padding: 0 15px;
      background: ${({ theme }) => theme.colors.brand};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      margin-left: auto;
      height: 38px;

      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        background: #8ea1e1;
      }
    }
  }
`;
