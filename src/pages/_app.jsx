import "src/styles/globals.css";
import { SWRConfig } from "swr";
import { fetcher } from "src/utils/fetcher";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}

export default MyApp;
