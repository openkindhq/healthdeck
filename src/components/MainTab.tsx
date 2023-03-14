import { Tabs, TabsContent, TabsList, TabsTrigger } from "@openkind/components";
import { useTranslation } from "next-i18next";
import Handbook from "./Handbook";
import Map from "./Map";
import Statistics from "./Statistics";

export default function MainTab() {
  const { t } = useTranslation();

  return (
    <div className="flex w-screen items-center justify-center py-10 lg:py-20">
      <Tabs defaultValue="statistics" className="w-[95%] lg:w-4/5 ">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="statistics">
              {t("content.statistics.title")}
            </TabsTrigger>
            <TabsTrigger value="handbook">
              {t("content.handbook.title")}
            </TabsTrigger>
            <TabsTrigger value="map">{t("content.map.title")}</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="statistics">
          <Statistics />
        </TabsContent>
        <TabsContent value="handbook">
          <Handbook />
        </TabsContent>
        <TabsContent value="map">
          <Map />
        </TabsContent>
      </Tabs>
    </div>
  );
}
