'use client';
import { ImageWithFallback } from "./ui/ImageWithFallback";

function DecorationImage() {
    return (
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="profilePhoto2.jpg"
                alt="About me"
                className="object-cover"
              />
        </div>
    );
}

function Introduction() {
    return (
        <div>
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg leading-relaxed">
                I am a passionate software engineer with experience in building web applications using modern technologies.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
                I am a passionate software engineer with experience in building web applications using modern technologies.
            </p>
        </div>
    );
}

function ExperienceBox() {
    return (
        <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">4+</div>
                <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">8</div>
                <div className="text-gray-700">Projects Completed</div>
            </div>
        </div>
    );
}

export function About() {
    return (
        <section id="about" className="flex min-h-screen items-center justify-center bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 gap-12 items-center">

                    <div> 
                        <DecorationImage />
                    </div>

                    <div className="space-y-6">
                        <Introduction />
                        <ExperienceBox />
                    </div>

                </div>
            </div>
            
        </section>
    );
}