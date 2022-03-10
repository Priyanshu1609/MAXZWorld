// Import Moralis wrapper to provide credentials
import { MoralisProvider } from "react-moralis";

// Import Global Styles (TailwindCSS)
import "../styles/globals.css";

// Import Navbar to show on every Page
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
