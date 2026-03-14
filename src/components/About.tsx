'use client';
import { ImageWithFallback } from "./ui/ImageWithFallback";

function AboutHeader() {
	return (
		<div className="grid grid-cols-[auto_auto_1fr] gap-x-6 items-center mb-16">

			{/* Photo */}
			<div className="flex justify-center">
				<div className="w-40 h-40 rounded-full overflow-hidden shadow-xl">
					<ImageWithFallback
						src="aboutMePhoto.jpg"
						alt="Profile"
						className="object-cover"
					/>
				</div>
			</div>

			{/* Title */}
			<div>
				<h2 className="text-5xl font-bold leading-tight">
					A little bit<br /> about me
				</h2>
			</div>

			{/* Intro paragraph */}
			<div className="ml-10">
				<p className="text-gray-700 leading-relaxed text-lg">
					Hi, I'm <span className="font-semibold">Yifeng Shen</span>, a software
					engineer specializing in embedded systems, robotics, and automotive
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

			<div className="bg-white p-8 rounded-xl text-center">
				<div className="text-4xl font-bold text-blue-600">4+</div>
				<div className="text-gray-700 mt-2">Years of Experience</div>
			</div>

			<div className="bg-white p-8 rounded-xl text-center">
				<div className="text-4xl font-bold text-blue-600">8</div>
				<div className="text-gray-700 mt-2">Projects Completed</div>
			</div>

			<div className="bg-white p-8 rounded-xl text-center">
				<div className="text-4xl font-bold text-blue-600">Master</div>
				<div className="text-gray-700 mt-2">Degree Obtained</div>
			</div>

		</div>
	);
}

function Timeline() {
	const timeline = [
		{
			year: "2018",
			title: "Started University",
			description:
				"BSc Computer Science with focus on robotics and software engineering.",
		},
		{
			year: "2021",
			title: "Robotics Research Project",
			description:
				"Worked on ROS2-based autonomous navigation systems.",
		},
		{
			year: "2022",
			title: "Automotive Software Engineer",
			description:
				"Developed validation tools and HiL testing systems for autonomous driving.",
		},
		{
			year: "2025",
			title: "Senior Software Engineer",
			description:
				"Focused on embedded systems, Linux environments, and automation.",
		},
	];

	return (
		<div className="relative max-w-4xl mx-auto">

			{/* vertical timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"></div>
			<div className="space-y-16">
				{timeline.map((item, index) => {
					const isLeft = index % 2 === 0;

					return (
						<div
							key={item.year}
							className="relative flex items-center"
						>

							{/* left content */}
							<div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "opacity-0"}`}>
								{isLeft && (
									<div className="transition hover:-translate-x-2">
										<h3 className="text-xl font-semibold">{item.title}</h3>
										<p className="text-gray-600 mt-2">{item.description}</p>
										<div className="text-blue-600 font-bold mt-2">{item.year}</div>
									</div>
								)}
							</div>

							{/* timeline dot */}
							<div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
								<div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md transition transform hover:scale-125"></div>
							</div>

							{/* right content */}
							<div className={`w-1/2 ${!isLeft ? "pl-12" : "opacity-0"}`}>
								{!isLeft && (
									<div className="transition hover:translate-x-2">
										<h3 className="text-xl font-semibold">{item.title}</h3>
										<p className="text-gray-600 mt-2">{item.description}</p>
										<div className="text-blue-600 font-bold mt-2">{item.year}</div>
									</div>
								)}
							</div>

						</div>
					);
				})}
			</div>

		</div>
	);
}

function CVActions() {
	return (
		<div className="flex justify-center gap-4 pt-16">

			<a
				href="/cv.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-md"
			>
				View CV
			</a>

			<a
				href="/cv.pdf"
				download
				className="px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition"
			>
				Download CV
			</a>

		</div>
	);
}

export function About() {
	return (
		<section id="about" className="section-customer">
			<div className="container-customer">
				<AboutHeader />
				<ExperienceCards />
				{/* <Timeline /> */}
				{/* <CVActions /> */}
			</div>
		</section>
	);
}