import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "../components/layout/navbar/Navbar";
import Router from "next/router";
import nProgress from "nprogress";
import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import axios from "axios";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <AuthProvider>
      <SWRConfig
        value={{
          refreshInterval: 9000,
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AuthProvider>
  );
}

export default MyApp;
