import "@/styles/globals.css";
import { PrivyProvider } from "@privy-io/react-auth";

import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PrivyProvider>
  );
}
