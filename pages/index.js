import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import Layout from '../components/Layout';
import NowPlaying from '../components/NowPlaying'

const Home = () => {

  return (
    <Layout>
      <Head>
        <title>Dashboard - Nhost</title>
      </Head>

      <div>
        <h2 className={styles.title}>Now playing</h2>
        <NowPlaying />
      </div>
    </Layout>
  );
}

export default Home;