import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initGA, logPageView } from "@/utils/analytics";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { redirects } from "@/utils/redirects";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => redirects().seoCheck(router.asPath), [router.pathname]);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    router.events.on("routeChangeComplete", logPageView);

    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
