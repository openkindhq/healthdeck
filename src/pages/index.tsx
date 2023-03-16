import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import FAQ from "../components/FAQ";
import MainTab from "../components/MainTab";
import Page from "../components/Page";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
    ])),
  },
});

const Home: NextPage = () => {
  return (
    <Page
      title="HealthDeck"
      description="Dashboard for general health metrics and information"
    >
      <div>
        <main>
          <MainTab />
        </main>
        <FAQ />
      </div>
    </Page>
  );
};

export default Home;
