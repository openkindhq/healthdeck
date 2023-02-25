import { useTranslation } from "next-i18next";

export default function Map() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center space-y-5 py-4 lg:items-start lg:p-20">
      <div className="font-heading text-xl font-medium lg:text-3xl">
        {t("content.map.longTitle")}
      </div>
      <iframe
        height="450"
        className="w-full rounded-md border-0"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/search?q=Doctors%20near%20me&key=AIzaSyDzXRnb98ND-kw4Tv7G1-cZliEKgO-JAnw"
      ></iframe>
    </div>
  );
}
