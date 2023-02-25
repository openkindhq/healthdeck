import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Page({ children, title, description }: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex h-screen flex-col justify-between overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-darkBg dark:text-white">
        <div>
          <NavBar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
