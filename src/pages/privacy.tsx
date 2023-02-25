import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config.mjs";
import Page from "../components/Page";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
    ])),
  },
});

const Privacy: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Page title="Privacy | HealthDeck" description="Our privacy policy">
      <main className="flex justify-center p-24">
        {t("privacy.description")}
      </main>
    </Page>
  );
};

export default Privacy;
