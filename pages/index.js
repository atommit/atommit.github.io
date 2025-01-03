import Head from "next/head";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";

export default function Home() {
  const [screen, setScreen] = useState("welcome");

  const navigate = ( newScreen) => {
    setScreen(newScreen);
  };

  return (
    <div className="landing text-[#332854]">
      <Head>
        <title>Atommit</title>
        <meta name="description" content="Atommit atomizes your git commits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {screen === "welcome" && <Layout navigate={navigate} />}
      {screen === "dashboard" && <Dashboard navigate={navigate} />}
      {screen === "login" && <Login navigate={navigate} />}
      {screen === "createAccount" && <CreateAccount navigate={navigate} />}

    </div>
  );
}
