import { Twitter, Github } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Button } from "@openkind/components";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="flex h-min items-center justify-center bg-white  p-12 text-neutral-900  dark:bg-black/10 dark:text-neutral-50">
      <div className="flex w-4/5 flex-col items-center justify-between space-y-8 text-neutral-500 dark:text-neutral-400  lg:flex-row lg:space-y-0">
        <div className="flex items-center justify-center space-x-1 lg:space-x-1">
          <h1 className="text-3xl">Ξ</h1>
          <p>{t("footer.initiative")}</p>
        </div>
        <div className="items-center space-y-4 lg:flex lg:space-x-8 lg:space-y-0">
          <div className="flex">
            <Link href="." passHref legacyBehavior>
              <a>
                <Button variant="link" size="sm">
                  {t("footer.contributors")}
                </Button>
              </a>
            </Link>
            <Link href="/privacy" passHref legacyBehavior>
              <a>
                <Button variant="link" size="sm">
                  {t("footer.privacyPolicy")}
                </Button>
              </a>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://twitter.com/openkindhq" passHref legacyBehavior>
              <a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-500 dark:text-neutral-400"
                >
                  <Twitter />
                </Button>
              </a>
            </Link>
            <Link
              href="https://github.com/openkindhq/healthdeck"
              passHref
              legacyBehavior
            >
              <a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-500 dark:text-neutral-400"
                >
                  <Github />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
