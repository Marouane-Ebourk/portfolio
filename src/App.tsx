import "./App.css";
import "./assets/blob.js";
import Hero from "./components/Hero";
import Blob from "./components/Blob.js";
import SkillsSlider from "./components/SkillsSlider.js";
import Projects from "./components/Projects.js";
import Description from "./components/Description.js";
import Footer from "./components/Footer.js";

function App() {
    return (
        <main className="bg-black p-4 min-h-screen text-white">
            <Blob />
            <Hero />
            <SkillsSlider />
            <Projects />
            <Description />

            <Footer />
        </main>
    );
}

export default App;
