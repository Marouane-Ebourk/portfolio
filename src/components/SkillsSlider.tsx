import { animate } from "motion";
import { useMotionValue, motion } from "motion/react";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function SkillsSlider() {
    const skills = [
        { name: "JavaScript", logo: "/skills/javascript.webp" },
        { name: "TypeScript", logo: "/skills/typescript.webp" },
        { name: "Python", logo: "/skills/python.webp" },
        { name: "CSS", logo: "/skills/css3.webp" },
        { name: "HTML", logo: "/skills/html5.webp" },
        { name: "PostgreSQL", logo: "/skills/postgresql.webp" },
        { name: "React", logo: "/skills/react.webp" },
        { name: "VueJs", logo: "/skills/vuejs.webp" },
        { name: "Wordpress", logo: "/skills/wordpress.webp" },
    ];

    const SLOW_DURATION = 25; // seconds
    const FAST_DURATION = 10; // seconds

    const [duration, setDuration] = useState(FAST_DURATION);

    const [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finishPosition = -width / 2 - 32;

        if (mustFinish) {
            controls = animate(
                xTranslation,
                [xTranslation.get(), finishPosition],
                {
                    ease: "linear",
                    duration:
                        duration * (1 - xTranslation.get() / finishPosition),
                    onComplete: () => {
                        setMustFinish(false);
                        setRerender(!rerender);
                    },
                }
            );
        } else {
            controls = animate(xTranslation, [0, finishPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls.stop;
    }, [xTranslation, width, duration, rerender, mustFinish]);

    return (
        <section className="container">
            <div className="max-w-2xl mx-auto relative overflow-hidden h-[8rem] mask">
                <motion.ul
                    ref={ref}
                    className="absolute left-0 flex space-x-8 p-4 max-w-md mx-auto"
                    style={{ x: xTranslation }}
                    onHoverStart={() => {
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true);
                        setDuration(FAST_DURATION);
                    }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <li key={index} className="flex-shrink-0">
                            <Skill name={skill.name} logo={skill.logo} />
                        </li>
                    ))}
                </motion.ul>
                {/* Fade gradient overlays */}
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
}

function Skill({ name, logo }: { name: string; logo: string }) {
    return (
        <div className="rounded-2xl w-[4rem] h-[4rem] bg-black flex items-center justify-center p-4">
            <img src={logo} alt={name} className="w-full h-full object-cover" />
        </div>
    );
}
