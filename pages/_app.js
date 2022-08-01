import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { NhostClient, NhostNextProvider } from '@nhost/nextjs'

const nhost = new NhostClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
    region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

function MyApp({ Component, pageProps }) {
  return (
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <Component {...pageProps} />
      <Toaster />
      </NhostNextProvider>
  );
}

export default MyApp;
