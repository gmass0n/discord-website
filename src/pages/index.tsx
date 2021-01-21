import { GetStaticProps, NextPage } from 'next';

import { navList } from '../assets';

import {
  Footer,
  HeroSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  DownloadSection,
} from '../components';

import { INavItem } from '../components/Footer';

interface IProps {
  navList: INavItem[];
}

export const  getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      navList,
    }
  }
}

const Home: NextPage<IProps> = ({ navList }) => {
  return (
    <main>
      <HeroSection />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <DownloadSection />

      <Footer navList={navList} />
    </main>
  );
};

export default Home;
