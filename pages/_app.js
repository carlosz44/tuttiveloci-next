import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Tutti Veloci |</title>
        <meta name="Description" content="Tutti Veloci" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
