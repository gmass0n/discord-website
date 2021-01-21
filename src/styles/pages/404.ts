import styled, { keyframes } from 'styled-components';

const glitchAnimation = keyframes`
  0% {
    clip: rect(3px, 9999px, 86px, 0);
  }
  6.66666667% {
    clip: rect(27px, 9999px, 128px, 0);
  }
  13.33333333% {
    clip: rect(35px, 9999px, 71px, 0);
  }
  20% {
    clip: rect(10px, 9999px, 134px, 0);
  }
  26.66666667% {
    clip: rect(23px, 9999px, 145px, 0);
  }
  33.33333333% {
    clip: rect(40px, 9999px, 80px, 0);
  }
  40% {
    clip: rect(33px, 9999px, 153px, 0);
  }
  46.66666667% {
    clip: rect(50px, 9999px, 84px, 0);
  }
  53.33333333% {
    clip: rect(57px, 9999px, 188px, 0);
  }
  60% {
    clip: rect(79px, 9999px, 65px, 0);
  }
  66.66666667% {
    clip: rect(21px, 9999px, 168px, 0);
  }
  73.33333333% {
    clip: rect(62px, 9999px, 119px, 0);
  }
  80% {
    clip: rect(4px, 9999px, 126px, 0);
  }
  86.66666667% {
    clip: rect(10px, 9999px, 133px, 0);
  }
  93.33333333% {
    clip: rect(51px, 9999px, 196px, 0);
  }
  to {
    clip: rect(77px, 9999px, 73px, 0);
  }
`;

const glitchAnimation2 = keyframes`
  10.52631579% {
    clip: rect(65px, 9999px, 200px, 0);
  }
  15.78947368% {
    clip: rect(8px, 9999px, 200px, 0);
  }
  21.05263158% {
    clip: rect(51px, 9999px, 159px, 0);
  }
  26.31578947% {
    clip: rect(6px, 9999px, 82px, 0);
  }
  31.57894737% {
    clip: rect(1px, 9999px, 106px, 0);
  }
  36.84210526% {
    clip: rect(17px, 9999px, 69px, 0);
  }
  42.10526316% {
    clip: rect(65px, 9999px, 144px, 0);
  }
  47.36842105% {
    clip: rect(1px, 9999px, 91px, 0);
  }
  52.63157895% {
    clip: rect(18px, 9999px, 209px, 0);
  }
  57.89473684% {
    clip: rect(14px, 9999px, 175px, 0);
  }
  63.15789474% {
    clip: rect(61px, 9999px, 107px, 0);
  }
  68.42105263% {
    clip: rect(73px, 9999px, 178px, 0);
  }
  73.68421053% {
    clip: rect(53px, 9999px, 207px, 0);
  }
  78.94736842% {
    clip: rect(33px, 9999px, 199px, 0);
  }
  84.21052632% {
    clip: rect(73px, 9999px, 144px, 0);
  }
  89.47368421% {
    clip: rect(79px, 9999px, 163px, 0);
  }
  94.73684211% {
    clip: rect(1px, 9999px, 76px, 0);
  }
  to {
    clip: rect(64px, 9999px, 117px, 0);
  }
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  max-width: 1180px;
  margin: 0 auto;

  section {
    max-width: 500px;
    margin-right: 40px;

    h2 {
      font-size: 25px;
      line-height: 40px;
      text-transform: uppercase;
      color: #72767d;
    }

    p {
      font-size: 20px;
      color: #b9bbbe;
      line-height: 35px;
      text-align: left;
      font-weight: 300;
      margin: 8px 0;
    }

    ul {
      display: flex;
      flex-direction: column;

      a {
        color: #c7d0f0;
        font-size: 18px;
        line-height: 35px;
        text-transform: uppercase;
        text-decoration: none;
        transition: 0.3s ease-in-out;
        position: relative;

        &::before {
          opacity: 0;
          position: absolute;
          top: -2px;
          left: -30px;
          content: url('/images/arrow-right.svg');
          transition: 0.3s ease-in-out;
        }

        &:hover {
          color: #7289da;

          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const GlitchWrapper = styled.div`
  height: 150px;
  margin-bottom: 40px;

  div {
    font-family: 'ArchivoBlack';
    font-weight: bold;
    color: rgba(246, 246, 247, 0.3);
    font-size: 150px;
    position: relative;

    &::after,
    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f6f6f7;
    }

    &::before {
      text-shadow: -2px 0 #e3e7f8;
      clip: rect(24px, 550px, 90px, 0);
      animation: ${glitchAnimation2} 4s linear infinite alternate-reverse;
    }

    &::after {
      text-shadow: -2px 0 rgba(114, 137, 218, 0.3);
      clip: rect(85px, 550px, 140px, 0);
      animation: ${glitchAnimation} 2s linear infinite alternate-reverse;
    }
  }
`;
