
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "John",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm John",
	description: "A Software Engineer working for the University of Illinois Applied Research Institute.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I gradutated with a Bachelors Degree from the University of Illinois in 2015. I worked for a startup for two years after graduation before moving to work for the University of Illinois Applied Research Institute.",
		"While working, I earned my Masters Degree in 2022 and am excited to continue expanding my knowledge while solving complex problems.",
		"In my free time, I captain a mixed ultimate frisbee team in Champaign, work on my baking skills, and read science-fiction and history books.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Software Development",
			description: "I excel at writing efficient low level code.",
			icons: null,
		},
		{
			title: "Intern Management",
			description: "I manage and advise interns throughout the year on collaborative projects.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at jmwolff3@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:jmwolff3@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "John M. Wolff | Software Engineer | Flutter",
	description: "Software Engineer for the Illinois Applied Research Institute",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@john_m_wolff",
	description: "Software Engineer",
	cards: [
		{
			title: "My website",
			link: "https://johnmwolff.com/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/jmwolff3/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/john-m-wolff/",
		},
	]
}
