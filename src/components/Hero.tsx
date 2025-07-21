import HeadShot from "../assets/headshot.png";

export default function Hero() {
    return (
        <section className="container py-20">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                <img
                    src={HeadShot}
                    alt="Headshot"
                    className="w-32 h-32 rounded-full mb-4 object-cover object-top"
                />
                <h1 className="text-3xl font-bold mb-3">Hi, I'm Marouane 👋</h1>
                <p className="text-md text-gray-400">
                    A passionate web developer focused on performance, clean
                    code and modern design.
                </p>
                <div className="flex gap-4 mt-6 text-sm">
                    <button className=""> 
                        <span>View Projects</span>
                    </button>
                    <button className="">
                        <span>Download CV</span>
                    </button>
                    {/* <button className="rounded-3xl px-4 py-2 bg-black"> View Projects
                    </button>
                    <button className="rounded-3xl px-4 py-2 border border-gray-400">
                        Download CV
                    </button> */}
                </div>
            </div>
        </section>
    );
}
