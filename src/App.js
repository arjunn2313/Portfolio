import Aboutme from "./components/About";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Hero from "./components/hero";



function App() {
  return (
   <>
   <section className="black">
    <Navbar/>
    <Hero/>
   </section>
   <section>
    <Aboutme/>
   </section>
   <section className="black">
    <Project/>
   </section>
   <section >Projects</section>
   </>
  );
}

export default App;
