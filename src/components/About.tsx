'use client';
import { ImageWithFallback } from "./ui/ImageWithFallback";

function AboutHeader() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-6 items-center mb-16 md:ml-16">

			{/* Photo */}
			<div className="flex justify-center md:justify-start">
				<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-8 border-blue-400">
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
					A bit more<br />about me
				</h2>
			</div>

			{/* Intro paragraph */}
			<div className="px-4 md:px-0 md:ml-16 md:mr-16">
				<p className="body-txt font-medium text-center">
					Hi, I’m a software engineer based in Berlin with a background in electrical engineering and computer engineering. 
                    I have experience working on autonomous driving, component testing, and test automation in the automotive industry, 
                    using technologies such as ROS2, C/C++, Python, and Linux-based environments. I enjoy building reliable systems and 
                    solving complex technical problems. 
                    Outside of tech, I’m a fan of video games and chess, and I like to stay active through gym and fitness.
				</p>
			</div>

		</div>
	);
}

function ExperienceCards() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

			<div className="bg-white/2 border border-white/5 backdrop-blur-lg p-8 rounded-xl text-center">
				<div className="main-txt text-blue-400">4+</div>
				<div className="body-txt mt-2">Years of Experience</div>
			</div>

			<div className="bg-white/2 border border-white/5 backdrop-blur-lg p-8 rounded-xl text-center">
				<div className="main-txt text-blue-400">8</div>
				<div className="body-txt mt-2">Projects Delivered</div>
			</div>

			<div className="bg-white/2 border border-white/5 backdrop-blur-lg p-8 rounded-xl text-center">
				<div className="main-txt text-blue-400">Master</div>
				<div className="body-txt mt-2">Degree Obtained</div>
			</div>

		</div>
	);
}

export function About() {
	return (
		<section id="about" className="section-customer">
			<div className="container-customer">
				<AboutHeader />
				<ExperienceCards />
			</div>
		</section>
	);
}