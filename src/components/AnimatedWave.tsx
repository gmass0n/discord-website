import { Container } from '../styles/components/AnimatedWave';

interface IProps {
  color?: string;
}

const AnimatedWave: React.FC<IProps> = ({ color = '#fff' }) => {
  return (
    <Container
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      id="animated-wave"
    >
      <path
        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
        fill={color}
      />
    </Container>
  );
};

export default AnimatedWave;
