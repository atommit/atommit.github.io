import {useEffect} from "react";
import Nav from "./Nav";
import Landing from "./Landing";
import Brands from "./Brands";
import About from "./About";
import Team from "./Team";
import Solution from "./Solution";
import Documents from "./Documents";
import Footer from "./Footer";

export default function Layout({navigate}) {
  useEffect(() => {
	// Scroll to top when the component is rendered
	window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only when the component mounts

  return (


	<>
	  <Nav navigate={navigate}/>

	  <main className="h-full w-full overflow-auto px-5">
		<Landing/>
		<About/>
		<Solution/>
		<Team/>
		<Documents/>


	  </main>
	  <Footer/>
	</>
  );
}
