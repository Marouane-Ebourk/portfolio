import Lenis from "lenis";
import HeadShot from "../assets/headshot.png";
import { motion } from "motion/react";

export default function Hero() {
    // smooth scrolling
    const lenis = new Lenis({
        autoRaf: true,
    });

    const fadeInUpVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
    };

    const transitionSettings = {
        duration: 0.8,
        ease: "easeInOut" as const,
    };

    const delays = {
        image: 0.3,
        title: 0.8,
        description: 1.2,
        buttons: 1.6,
    };

    const scrollToSection = () => {
        const targetElement = document.getElementById("projects");
        if (targetElement) {
            lenis.scrollTo(targetElement, {
                duration: 1,
            });
        }
    };

    return (
        <section className="container py-20">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                <motion.img
                    variants={fadeInUpVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        ...transitionSettings,
                        delay: delays.image,
                    }}
                    src={HeadShot}
                    alt="Headshot"
                    className="w-32 h-32 rounded-full mb-4 object-cover object-top"
                />

                <motion.h1
                    variants={fadeInUpVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        ...transitionSettings,
                        delay: delays.title,
                    }}
                    className="text-3xl font-bold mb-3"
                >
                    Hi, I'm Marouane 👋
                </motion.h1>

                <motion.p
                    variants={fadeInUpVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        ...transitionSettings,
                        delay: delays.description,
                    }}
                    className="text-md text-gray-400"
                >
                    A passionate web developer focused on performance, clean
                    code and modern design.
                </motion.p>

                <motion.div
                    variants={fadeInUpVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        ...transitionSettings,
                        delay: delays.buttons,
                    }}
                    className="flex flex-wrap gap-4 mt-6 w-full"
                >
                    <button
                        className="glowing-btn flex-1 inline-block whitespace-nowrap"
                        onClick={scrollToSection}
                    >
                        <span>View Projects</span>
                    </button>
                    <a
                        href="/cv/cv.pdf"
                        download="Marouane_Ebourk_CV.pdf"
                        className="glowing-btn flex-1 inline-block whitespace-nowrap"
                    >
                        <span>Download Resume</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
