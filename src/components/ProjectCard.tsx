import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import type { Project } from "../types";

interface CardProps extends Project {
    index: number;
    range: number[];
    targetScale: number;
    progress: MotionValue<number>;
}

export default function Card({
    title,
    description,
    src,
    link,
    color,
    index,
    range,
    targetScale,
    progress,
}: CardProps) {

    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
    const scale= useTransform (progress, range, [1, targetScale])


    return (
        <motion.div
            className="h-[50rem] flex items-center justify-center w-full sticky"
            style={{scale, top: `calc(-10% + ${index * 25}px)` }}
        >
            <div
                className="w-full max-w-2xl h-[500px] rounded-2xl grid grid-cols-2 gap-8 py-14 px-7"
                style={{ backgroundColor: color, marginBottom: "3rem" }}
                ref={container}
            >
                {/* part 1 */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-3">{title}</h2>
                        <div>{description}</div>
                    </div>
                    <a href={link} className="text-blue-500 underline">
                        visit project
                    </a>
                </div>

                {/* part 2 */}
                <div>
                    <div className="overflow-hidden">
                        <motion.div style={{ scale: imageScale }}>
                            <img src={src} className="w-full object-cover" />
                        </motion.div>
                    </div>
                </div>

                {/* <h2>{title}</h2>
            <p>{description}</p>
            <img src={src} alt={title} />
            <a href={link} style={{ backgroundColor: color }}>
                View Project
            </a> */}
            </div>
        </motion.div>
    );
}
