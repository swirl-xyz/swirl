import "@/styles/globals.css";
import { PrivyProvider } from "@privy-io/react-auth";

export default function App({ Component, pageProps }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}>
      <Component {...pageProps} />
    </PrivyProvider>
  );
}
