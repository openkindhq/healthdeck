import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@openkind/components";

import { Sun, Moon } from "lucide-react";

import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Language({ code, name }: { code: string; name: string }) {
  return (
    <>
      <code>{code}</code> <p className="hidden lg:inline">{name}</p>
    </>
  );
}

export default function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);
  const { t } = useTranslation();
  const router = useRouter();

  const languageChange = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    void router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const themeChange: React.MouseEventHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <NavigationMenu className="h-16 border-b-[0.25px] border-neutral-300 bg-white text-neutral-900 dark:border-neutral-800 dark:bg-black/10 dark:text-neutral-50">
      <NavigationMenuList className="flex w-screen justify-around">
        <NavigationMenuItem>
          <Link className="font-heading font-medium lg:text-xl" href="/">
            LongProjectName{" "}
          </Link>
          <p className="hidden text-xs text-neutral-500 dark:text-neutral-400 lg:inline">
            {t("byOpenKind")}
          </p>
        </NavigationMenuItem>
        <NavigationMenuList className="space-x-1 lg:space-x-2">
          <NavigationMenuItem>
            <Button variant="ghost" size="sm" onClick={themeChange}>
              {theme === "light" ? (
                <Moon className="text-neutral-400" size={22} />
              ) : (
                <Sun className="text-neutral-500" size={22} />
              )}
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Select onValueChange={languageChange}>
              <SelectTrigger className="w-full lg:w-28">
                <SelectValue
                  placeholder={<Language name="English" code="EN" />}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en" className="font-heading">
                  <Language name="English" code="EN" />
                </SelectItem>
              </SelectContent>
            </Select>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="https://discord.gg/R4wJ2TDshg" passHref legacyBehavior>
              <a>
                <Button size="sm">{t("support")}</Button>
              </a>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
