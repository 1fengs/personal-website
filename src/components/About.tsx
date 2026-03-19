'use client';
import { ImageWithFallback } from './ui/ImageWithFallback';

function AboutHeader() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-6 items-center mb-16 md:ml-16">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                    <ImageWithFallback
                        src="aboutMePhoto.jpg"
                        alt="Profile"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Title */}
            <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    A bit more
                    <br />
                    about me
                </h2>
            </div>

            {/* Intro paragraph */}
            <div className="px-4 md:px-0 md:ml-16 md:mr-16">
                <p className="body-txt text-gray-400 font-semibold text-center">
                    Hi, I’m a software engineer based in Berlin with a background in electrical
                    engineering and computer engineering. I have experience working on autonomous
                    driving, component testing, and test automation in the automotive industry,
                    using technologies such as ROS2, C/C++, Python, and Linux-based environments.
                </p>
            </div>
        </div>
    );
}

function ExperienceCards() {
    return (
        <div className="items-center justify-center flex mx-auto">
            <div className="subtle-blur-card grid grid-cols-3 gap-10 lg:gap-20 p-4 md:p-8">
                <div className="text-left">
                    <div className="text-2xl lg:text-5xl font-bold">4+</div>
                    <div className="text-sm md:text-base mt-2">Years of Experience</div>
                </div>

                <div className="text-left">
                    <div className="text-2xl lg:text-5xl font-bold">8</div>
                    <div className="text-sm md:text-base mt-2">Projects Delivered</div>
                </div>

                <div className="text-left">
                    <div className="text-2xl lg:text-5xl font-bold">Master</div>
                    <div className="text-sm md:text-base mt-2">Degree Obtained</div>
                </div>
            </div>
        </div>
    );
}

export function About() {
    return (
        <section id="about" className="section-customer">
            <div className="relative container-customer">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-[10%] left-[60%] w-[300px] h-[300px] bg-blue-600/40 rounded-full blur-[100px]" />
                    {/* <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[140px]" /> */}
                </div>
                <AboutHeader />
                <ExperienceCards />
            </div>
        </section>
    );
}
