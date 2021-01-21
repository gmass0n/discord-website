import styled, { keyframes } from 'styled-components';

const openForm = keyframes`
  from { max-width: 0px; }
  to { max-width: 380px }
`;

const fade = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const balloonsAnimation = keyframes`
 0% { transform: translateY(100px); }
  to { transform: translateY(-800px); }
`;

const shiftRight = keyframes`
  0% { transform: translateX(0); }
  to { transform: translateX(8000px); }
`;

export const Container = styled.section`
  position: relative;
  overflow: hidden;

  height: 635px;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 90px 25px;
  max-width: 750px;
  margin: 0 auto;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 53px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    letter-spacing: -2px;
    text-align: center;
    line-height: 120%;
  }

  p {
    margin-top: 40px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    line-height: 33px;
    text-align: center;
    opacity: 0.9;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 40px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      button[type='button'],
      a {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 56px;
        border-radius: 28px;
        font-size: 17px;
        font-weight: 500;
        padding: 0 32px;
        white-space: nowrap;

        transition: all 0.3s ease-in-out;

        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.white};

        margin-left: auto;
        margin-right: 25px;

        &:hover {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          color: ${({ theme }) => theme.colors.brand};
        }

        &:last-child {
          color: ${({ theme }) => theme.colors.white};
          background: ${({ theme }) => theme.colors.text};
          margin-right: 56px;
          margin-left: 0;

          &:hover {
            background-color: #36393f;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
        }

        svg {
          margin-right: 10px;
          height: 18px;
          width: 18px;
        }
      }
    }

    form {
      display: flex;
      align-items: center;

      max-width: 380px;
      overflow: hidden;
      width: 100%;
      height: 56px;
      background-color: ${({ theme }) => theme.colors.offWhite};
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      border-radius: 28px;

      animation: ${openForm} 0.55s cubic-bezier(0.25, 0.25, 0.315, 1.35)
        forwards;

      input {
        margin: 0 32px;
        color: ${({ theme }) => theme.colors.text};
        background: none;
        border: none;
        font-size: 15px;
        flex: 1;

        &::placeholder {
          color: #999;
        }
      }

      button[type='submit'] {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 18px;
        margin: 9px;
        width: 100%;
        max-width: 60px;
        height: calc(100% - 18px);
        border-radius: 28px;
        background-color: ${({ theme }) => theme.colors.brand};

        transition: background-color, box-shadow 0.3s ease-in-out;

        svg {
          color: ${({ theme }) => theme.colors.white};
          width: 20px;
          height: 20px;
        }

        &:hover {
          background-color: #8ea1e1;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
      }
    }

    span {
      margin-top: 20px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      line-height: 18px;

      animation: ${fade} 0.5s ease-in-out;

      a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: underline;
      }
    }
  }
`;

export const Background = styled.div`
  background: linear-gradient(0deg, #7196ff -0.45%, #2a5ee8 71.18%);
  position: absolute;
  top: 0;
  left: 0;

  z-index: -10;

  height: 100%;
  width: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    height: 100%;
    width: auto;
  }

  svg {
    position: absolute;
    z-index: 100;
    top: 0;
  }

  #animated-wave {
    position: absolute;
    top: auto;
    bottom: -30px;
    z-index: 999;
  }

  #balloons-svg {
    bottom: 0;
    top: auto;
    left: 40%;
    animation: ${balloonsAnimation} 50s linear infinite;
    z-index: 101;
  }

  #ship-svg {
    left: 10%;
    top: 20%;
    animation: ${shiftRight} 1000s linear infinite;
  }

  #island-svg {
    left: 55%;
    top: 13%;
    animation: ${shiftRight} 1600s linear infinite;
  }

  #cloud1-svg {
    top: auto;
    bottom: 0;
    margin-left: -1250px;
    height: auto;
    animation: ${shiftRight} 685s linear forwards;
  }

  #cloud1-svg {
    margin-left: 631px;
    top: auto;
    bottom: 0;
    animation: ${shiftRight} 1200s linear forwards;
  }
  #cloud2-svg {
    margin-left: 631px;
    top: auto;
    bottom: 0;
    animation: ${shiftRight} 1200s linear forwards;
  }

  #cloud3-svg {
    top: auto;
    bottom: 0;
    margin-left: -166px;
    animation: ${shiftRight} 1200s linear forwards;
  }

  #cloud4-svg {
    top: auto;
    bottom: 0;
    margin-left: -767px;
    animation: ${shiftRight} 2400s linear forwards;
  }

  #cloud5-svg {
    top: auto;
    bottom: 0;
    margin-left: 86px;
    animation: ${shiftRight} 1600s linear forwards;
  }

  #cloud7-svg {
    margin-top: 211px;
    margin-left: 353px;
    animation: ${shiftRight} 2400s linear forwards;
  }

  #cloud8-svg {
    top: auto;
    bottom: 0;
    margin-bottom: 16px;
    margin-left: 4px;
    animation: ${shiftRight} 1200s linear forwards;
  }

  #cloud9-svg {
    margin-top: 268px;
    margin-left: -1200px;
    animation: ${shiftRight} 960s linear forwards;
  }

  #hero-buildings-svg {
    top: auto;
    bottom: 0;
    left: 35px;
    width: 100%;
  }

  #hero-foreground-left-svg {
    top: auto;
    bottom: 0;
    left: -40%;
  }

  #hero-foreground-right-svg {
    top: auto;
    bottom: 0;
    right: -40%;
  }
`;
