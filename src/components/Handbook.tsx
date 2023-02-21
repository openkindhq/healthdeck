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
  Input,
} from "@openkind/components";

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

  return (
    <div className="flex flex-col items-center justify-center space-y-5 py-4 lg:p-20">
      <div className="flex w-full flex-col space-y-2">
        <div className="font-heading text-3xl font-bold">
          {t("content.handbook.title")}
        </div>
        <div className="text-sm lg:text-base">
          <div className="text-neutral-400">
            {t("content.handbook.description")}
          </div>
          <div className="mt-1 text-xs text-neutral-400 ">
            {t("content.handbook.source")}: The net
          </div>
        </div>
      </div>

      <Input placeholder={t("content.handbook.placeholder")!}></Input>
      <div className="flex w-full rounded-md border border-neutral-200 p-8 dark:border-neutral-700">
        <div>
          <h1 className="font-heading text-2xl font-medium ">Common cold</h1>
        </div>
      </div>
      <Warning />
    </div>
  );
}
