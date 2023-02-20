import { type AppType } from "next/app";

import { api } from "../utils/api";
import { appWithTranslation } from "next-i18next";

import nextI18nConfig from "../../next-i18next.config.mjs";

import { Inter, Poppins } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${inter.variable} ${poppins.variable} font-main`}>
      <Component {...pageProps} />
    </main>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = api.withTRPC(I18nApp);

export default TRPCApp;
