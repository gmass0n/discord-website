import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 20px 40px 90px;
  background: ${({ theme }) => theme.colors.offWhite};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  max-width: 1180px;
  width: 100%;
  margin: 0 auto;

  > div {
    position: absolute;
    top: -25px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 28px;
    z-index: 10;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    height: 56px;
    border-radius: 28px;
    font-size: 20px;
    font-weight: 500;
    padding: 0 32px;
    white-space: nowrap;

    transition: all 0.3s ease-in-out;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.brand};

    svg {
      margin-right: 10px;
      height: 20px;
      width: 20px;
    }

    &:hover {
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      background-color: #8ea1e1;
    }
  }
`;
