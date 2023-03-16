import { createTRPCRouter, publicProcedure, dataCache } from "../trpc";

interface Data {
  Message?: string;
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

export default createTRPCRouter({
  get: publicProcedure.query(() => {
    if (
      !dataCache.updatedAt ||
      // @ts-expect-error date comparison
      (new Date() - dataCache.updatedAt) / 60000 > 5
    ) {
      return fetch("https://api.covid19api.com/summary")
        .then((res) => res.json())
        .then((data) => {
          if ((data as Data).Message === "Caching in progress") {
            return (
              dataCache.data ||
              ({
                Global: {
                  TotalConfirmed: 0,
                  TotalDeaths: 0,
                },
                Countries: [],
              } as Data)
            );
          }
          dataCache.data = data as Data;
          dataCache.updatedAt = new Date();
          return data as Data;
        });
    }
    return dataCache.data;
  }),
});
