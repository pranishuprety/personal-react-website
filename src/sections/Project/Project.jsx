import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import InfiniteCarousel from '../../common/InfiniteCarousel';
import soccerhub from '../../assets/soccerhub.png';
import askMattrab from '../../assets/ask-mattrab.png';
import pranish from '../../assets/pranish.png';
import dogBreedFinder from '../../assets/dog-breed-finder.png';
import projectDristi from '../../assets/dristi.png';
import carboknot from '../../assets/carboknot.svg';
import respondr from '../../assets/respondr.svg';
import camppulse from '../../assets/camppulse.svg';
import neuronudge from '../../assets/neuronudge.svg';
import baymax from '../../assets/baymax.svg';
import comeFlyWithMe from '../../assets/comeflywithme.svg';

const projects = [
	{
		name: 'SoccerHub',
		desc: 'Tracks live soccer scores, upcoming matches, and stats for top leagues in real time.',
		link: 'https://pranishuprety.github.io/soccerhub/',
		src: soccerhub,
	},
	{
		name: 'Ask Mattrab',
		desc: 'A social learning platform where students can ask questions, share explanations, and learn from each other. Ruby on Rails, PostgreSQL, HTML/CSS, jQuery, AWS.',
		link: 'https://www.askmattrab.com/',
		src: askMattrab,
		keepColor: true,
	},
	{
		name: 'Come Fly With Me',
		desc: 'A free browser flight simulator. The sky is yours.',
		link: 'https://pranishuprety.github.io/comeflywithme/',
		src: comeFlyWithMe,
	},
	{
		name: 'Personal Website',
		desc: 'Showcases my projects and skills with a clean and responsive design. Built using JavaScript, React, and Bootstrap, powered by Vite.',
		link: 'https://github.com/pranishuprety/portfolio-website',
		src: pranish,
	},
	{
		name: 'Dog Breed Finder',
		desc: 'Fetches random images of selected dog breeds every 5 seconds.',
		link: 'https://pranishuprety.github.io/dogbreedfinder/',
		src: dogBreedFinder,
	},
	{
		name: 'Project Dristi',
		desc: 'Group project built in HackPrinceton - Spring 2025. A smart cane with the fusion of AI and IoT',
		link: 'http://bit.ly/3R0Xiud',
		src: projectDristi,
	},
	{
		name: 'CarboKnot',
		desc: 'HackPrinceton Spring 2026. Chrome extension that shows the carbon cost of products before you buy.',
		link: 'https://devpost.com/software/carboknot',
		src: carboknot,
	},
	{
		name: 'Respondr',
		desc: 'Hack@URI 2026 winner. Emergency platform connecting patients to doctors with live wearable data.',
		link: 'https://devpost.com/software/respondr-zqegfs',
		src: respondr,
	},
	{
		name: 'CampPulse',
		desc: 'Hoya Hacks 2026. Live campus heatmap for safety, crowds, and free food from student check-ins.',
		link: 'https://devpost.com/software/camppulse',
		src: camppulse,
	},
	{
		name: 'NeuroNudge',
		desc: 'HackPrinceton Fall 2025. Browser extension that detects focus drift and gently nudges you back.',
		link: 'https://devpost.com/software/neuronudge-exjr10',
		src: neuronudge,
	},
	{
		name: 'Baymax',
		desc: 'HackDartmouth X. AI tool for therapists using facial and voice emotion analysis.',
		link: 'https://devpost.com/software/baymax-jqlo2b',
		src: baymax,
	},
];

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.carouselShell}>
				<InfiniteCarousel>
					{projects.map((project) => (
						<ProjectCard key={project.name} {...project} />
					))}
				</InfiniteCarousel>
			</div>
		</section>
	);
}

export default Projects;
