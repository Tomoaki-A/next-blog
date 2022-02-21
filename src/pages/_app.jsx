import "src/styles/globals.css";
import { SWRConfig } from "swr";
import { fetcher } from "src/utils/fetcher";
import Layout from "src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </div>
  );
}

export default MyApp;
