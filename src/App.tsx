import "./App.css";
import "./assets/blob.js";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Blob from "./components/Blob.js";
import SkillsSlider from "./components/SkillsSlider.js";
import Projects from "./components/Projects.js";

function App() {
    return (
        <main className="bg-slate-900 p-4 min-h-screen text-white">
            <Blob />
            <Header />
            <Hero />
            <SkillsSlider />
            <Projects />

            <div className="h-screen"></div>
        </main>
    );
}

export default App;
