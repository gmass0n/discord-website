import styled, { css, keyframes } from 'styled-components';

const enter = keyframes`
  from { opacity: 0; transform: translateY(200px); }
  to { opacity: 1; transform: translateY(0); }
`;

interface ISectionContainerProps {
  hasWave?: boolean;
}

interface ISectionContentProps {
  isColumn?: boolean;
}

export const SectionContainer = styled.section<ISectionContainerProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 600px;
  padding: 90px 40px 180px;
  background: ${({theme}) => theme.colors.white};

  #animated-wave {
    position: absolute;
    bottom: -30px;
    top: auto;
  }

  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.offWhite};
  }

  ${({ hasWave = true }) =>
    !hasWave &&
    css`
      padding-bottom: 90px;
    `}
`;

export const SectionContent = styled.div<ISectionContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1180px;
  width: 100%;
  margin: 0 auto;

  animation: ${enter} 0.8s forwards;

  svg {
    object-fit: cover;

    & + article {
      margin-left: 40px;
    }
  }

  img {
    width: 85%;
  }

  article {
    display: flex;
    flex-direction: column;

    max-width: 380px;

    & + svg {
      margin-left: 40px;
    }

    h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.colors.text};
      line-height: 120%;
      text-align: left;
    }

    p {
      margin-top: 25px;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.text};
      line-height: 32px;
      text-align: left;
    }
  }

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
      justify-content: center;

      article {
        max-width: 980px;
        margin-bottom: 80px;

        h2,
        p {
          text-align: center;
        }
      }
    `}
`;
