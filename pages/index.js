import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="landing text-[#332854]">
      <Head>
        <title>Atommit</title>
        <meta name="description" content="Atommit atomizes your git commits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}
