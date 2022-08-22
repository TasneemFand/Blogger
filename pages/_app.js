import React, { useState } from "react";

import "../styles/globals.scss";
import { Layout } from "../components";
import { ThemeProvider } from "../components/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
