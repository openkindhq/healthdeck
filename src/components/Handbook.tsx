import { useTranslation } from "next-i18next";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Command,
  CommandList,
  CommandItem,
  CommandInput,
  CommandGroup,
  CommandEmpty,
} from "@openkind/components";
import { useState } from "react";

import conditions from "../server/api/conditions.json";

import { api } from "../utils/api";
import Link from "next/link";

function Warning() {
  const { t } = useTranslation();

  return (
    <div className="flex w-full items-center rounded-md bg-red-200/50  py-3 text-xs text-red-500 dark:text-red-300 lg:text-sm">
      <div className="px-3 text-xl font-extrabold lg:px-8 lg:text-2xl">!</div>
      <div>
        {t("content.handbook.shortAdvice")}{" "}
        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant="link"
              size="sm"
              className="h-6 px-0 text-xs lg:text-sm"
            >
              {t("learnMore")}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {t("content.handbook.longAdviceTitle")}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {t("content.handbook.longAdvice")}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t("close")}</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default function Handbook() {
  const { t } = useTranslation();

  const [searchBarValue, setSearchBarValue] = useState("");
  const [popupState, setPopupState] = useState(true);

  const [currentCondition, setCurrentCondition] = useState(conditions[60]);

  const results = api.searchCondition.getById.useQuery(searchBarValue);

  if (!popupState) {
    if (results.data && results.data[0]) {
      if (currentCondition != results.data[0].item) {
        setCurrentCondition(results.data[0].item);
      }
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center space-y-5 py-4 lg:p-20">
      <div className="flex w-full flex-col space-y-2">
        <div className="font-heading text-3xl font-bold">
          {t("content.handbook.title")}
        </div>
        <div>
          <div className="text-sm text-neutral-400 lg:text-base">
            {t("content.handbook.description")}
          </div>
          <div className="mt-1 text-xs text-neutral-400 ">
            {t("content.handbook.source")}: Apollo
          </div>
        </div>
      </div>

      {/* bad fix */}
      <div className="relative flex h-12 w-full justify-center">
        <Command
          className="absolute h-min rounded-lg shadow-md"
          filter={() => {
            return 1;
          }}
        >
          <CommandInput
            //@ts-expect-error translate function doesn't return string
            placeholder={t("content.handbook.search")}
            onValueChange={(v) => {
              setSearchBarValue(v);
              setPopupState(true);
            }}
            value={searchBarValue}
          />
          <CommandList>
            {searchBarValue != "" && popupState == true ? (
              <>
                <CommandEmpty>{t("content.handbook.noResults")}</CommandEmpty>
                <CommandGroup>
                  {results.data?.map((i) => (
                    <CommandItem
                      key={i.item.index}
                      onSelect={(v) => {
                        setSearchBarValue(v);
                        setPopupState(false);
                      }}
                    >
                      {i.item.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            ) : null}
          </CommandList>
        </Command>
      </div>

      <div className="flex w-full h-min flex-col space-y-3 rounded-md border border-neutral-200 p-12 dark:border-neutral-700">
        <h1 className="font-heading text-3xl font-bold">
          {currentCondition?.title}
        </h1>

        <p className="text-sm text-neutral-400">{currentCondition?.desc}</p>
        <Link href={currentCondition?.href ?? ""} passHref legacyBehavior>
          <a target="_blank">
            <Button
              variant="link"
              className="h-0 w-max px-0 text-sm text-neutral-400"
            >
              Learn more
            </Button>
          </a>
        </Link>
      </div>
      <Warning />
    </div>
  );
}
