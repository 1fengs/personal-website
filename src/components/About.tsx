'use client';
import { ImageWithFallback } from "./ui/ImageWithFallback";

function AboutHeader() {
	return (
		<div className="grid grid-cols-[auto_auto_1fr] gap-x-6 items-center mb-16 ml-16">

			{/* Photo */}
			<div className="flex justify-center">
				<div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400">
					<ImageWithFallback
						src="aboutMePhoto.jpg"
						alt="Profile"
						className="object-cover"
					/>
				</div>
			</div>

			{/* Title */}
			<div>
				<h2 className="ml-4 text-5xl font-bold leading-tight text-justify">
					A bit more<br /> about me
				</h2>
			</div>

			{/* Intro paragraph */}
			<div className="ml-16 mr-16">
				<p className="text-white font-semibold leading-relaxed text-justify">
					Hi, I'm a software engineer specializing in embedded systems, robotics, and automotive
					software development. With experience in autonomous driving projects,
					HiL testing, and Linux-based systems, I enjoy building reliable tools
					and scalable engineering solutions that solve real-world problems.
				</p>
			</div>

		</div>
	);
}

function ExperienceCards() {
	return (
		<div className="grid grid-cols-3 gap-8">

			<div className="bg-white/5 border border-white/5 backdrop-blur-lg p-8 rounded-xl text-center">
				<div className="text-4xl font-bold text-blue-400">4+</div>
				<div className="text-white font-semibold mt-2">Years of Experience</div>
			</div>

			<div className="bg-white/2 border border-white/5 backdrop-blur-lg p-8 rounded-xl text-center">
				<div className="text-4xl font-bold text-blue-400">8</div>
				<div className="text-white font-semibold mt-2">Projects Completed</div>
			</div>

			<div className="bg-white/2 border border-white/5 backdrop-blur-lg p-8 rounded-xl text-center">
				<div className="text-4xl font-bold text-blue-400">Master</div>
				<div className="text-white font-semibold mt-2">Degree Obtained</div>
			</div>

		</div>
	);
}

export function About() {
	return (
		<section id="about" className="section-customer relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                {/* Background glow */}
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-blue-400/15 rounded-full blur-[120px]" />
            </div>
			<div className="container-customer">
				<AboutHeader />
				<ExperienceCards />
			</div>
		</section>
	);
}