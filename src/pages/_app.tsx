import { type AppType } from "next/app";

import { api } from "../utils/api";
import { appWithTranslation } from "next-i18next";

import nextI18nConfig from "../../next-i18next.config.mjs";

import { Red_Hat_Display, Poppins } from "@next/font/google";

const rhd = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-rhd",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

import "../styles/globals.css";
import Head from "next/head";
import React from "react";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <main className={`${rhd.variable} ${poppins.variable} font-main`}>
        <Component {...pageProps} />
      </main>
    </React.StrictMode>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = api.withTRPC(I18nApp);

export default TRPCApp;
