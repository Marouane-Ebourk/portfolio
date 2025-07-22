// import { defaultServerConditions } from "vite";
import { useRef } from "react";
import { projects } from "../data.ts";
import { useScroll } from "motion/react";
import Card from "./ProjectCard";
import type { Project } from "../types";

export default function Projects() {

    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    return (
        <section className="container my-20" id="projects" ref={container}>
            <div className="flex flex-col items-center">
                {projects.map((project: Project, i: number) => {
                    const targetScale = 1 - (projects.length - i) * 0.05;
                    return (
                        <Card
                            key={i}
                            index={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
