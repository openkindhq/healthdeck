import { useTranslation } from "next-i18next";
import { useState } from "react";
import { api } from "../utils/api";
import { VictoryPie } from "victory";

interface Data {
  Global: {
    TotalConfirmed: number;
    TotalDeaths: number;
  };
  Countries: {
    Country: string;
    TotalConfirmed: number;
    TotalDeaths: number;
  }[];
}

export default function Statistics() {
  const { t } = useTranslation();
  const [data, setData] = useState<Data>();

  const results = api.fetchVirusData.get.useQuery();

  if (!data && !results.isLoading) {
    setData(results.data as Data);
  }

  return (
    <div className="relative flex flex-col items-center justify-center space-y-5 py-4 lg:p-20">
      {data && (
        <div className="w-full">
          <div>
            <div className="font-heading text-xl font-medium lg:text-3xl">
              {t("content.statistics.global")}
            </div>
            <div className="mt-4 flex flex-col  lg:mt-0 lg:flex-row">
              <div className="items-centerr flex w-full flex-col justify-center">
                <div className="h-1/2 w-full space-y-2">
                  <div className="flex h-1/2 flex-col items-center justify-center space-y-2 rounded-md bg-yellow-300/60 p-4 lg:items-start lg:p-0 lg:pl-12">
                    <label className="font-bold">
                      {t("content.statistics.totalConfirmed")}
                    </label>
                    <label>{data.Global.TotalConfirmed}</label>
                  </div>
                  <div className="flex h-1/2 flex-col items-center justify-center space-y-2 rounded-md  bg-red-300/60 p-4 lg:items-start lg:p-0 lg:pl-12">
                    <label className="font-bold">
                      {t("content.statistics.totalDeaths")}
                    </label>
                    <label>{data.Global.TotalDeaths}</label>
                  </div>
                </div>
              </div>
              <VictoryPie
                data={[
                  {
                    x: t("content.statistics.totalConfirmed"),
                    y: data.Global.TotalConfirmed || 100,
                  },
                  {
                    x: t("content.statistics.totalDeaths"),
                    y: data.Global.TotalDeaths || 100,
                  },
                ]}
                colorScale={["yellow", "red"]}
                style={{
                  labels: { fill: "rgb(163 163 163)" },
                }}
                radius={100}
              />
            </div>

            <div className="mb-8 font-heading text-xl font-medium lg:text-3xl">
              {t("content.statistics.c-wise")}
            </div>

            <table className="w-full border-separate rounded-md border border-neutral-200 text-sm dark:border-neutral-700 lg:text-base">
              <tr>
                <th className="p-2 text-left lg:p-5">
                  {t("content.statistics.country")}
                </th>
                <th className="p-2 text-left lg:p-5">
                  {t("content.statistics.totalConfirmed")}
                </th>
                <th className="p-2lg:p-5 text-left">
                  {t("content.statistics.totalDeaths")}
                </th>
              </tr>
              {data.Countries.map((c) => (
                <tr
                  key={c.Country}
                  className="text-neutral-500 dark:text-neutral-400"
                >
                  <td className="p-1 text-left lg:px-5 lg:py-2">{c.Country}</td>
                  <td className="p-1 text-left lg:px-5 lg:py-2">
                    {c.TotalConfirmed}
                  </td>
                  <td className="p-1 text-left lg:px-5 lg:py-2">
                    {c.TotalDeaths}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
