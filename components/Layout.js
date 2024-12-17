import Nav from "./Nav";
import Landing from "./Landing";
import Brands from "./Brands";
import About from "./About";
import Team from "./Team";
import Solution from "./Solution";
import Documents from "./Documents";
import Footer from "./Footer";

export default function Layout({ navigate }) {
  return (


    <>
      <Nav />

      <main className="h-full w-full overflow-auto px-5">
        <Landing/>
        <About/>
        <Solution/>
        <Team/>
        <Documents/>
        <button className="w-40" onClick={() => navigate("dashboard")}>
          Welcome
        </button>

      </main>
      <Footer/>
    </>
  );
}
