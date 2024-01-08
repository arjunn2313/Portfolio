import Aboutme from "./components/About";
import ContactMe from "./components/ContactMe";
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
    <section className="black h-full">
    <Project/>
    </section>
   <section >
    <ContactMe/>
   </section>
   </>
  );
}

export default App;
