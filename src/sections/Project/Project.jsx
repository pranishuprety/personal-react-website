import styles from './ProjectStyles.module.css';
import soccerhub from '../../assets/soccerhub.png';
import pranish from '../../assets/pranish.png';
import ProjectCard from '../../common/ProjectCard';
import InfiniteCarousel from '../../common/InfiniteCarousel';
import dogBreedFinder from '../../assets/dog-breed-finder.png';
import projectDristi from '../../assets/dristi.png';
import carboknot from '../../assets/carboknot.svg';
import respondr from '../../assets/respondr.svg';
import camppulse from '../../assets/camppulse.svg';
import neuronudge from '../../assets/neuronudge.svg';
import baymax from '../../assets/baymax.svg';

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<InfiniteCarousel>
				<ProjectCard src={soccerhub} link="https://pranishuprety.github.io/soccerhub/" name="SoccerHub" desc="Tracks live soccer scores, upcoming matches, and stats for top leagues in real time." />
				<ProjectCard src={pranish} link="https://github.com/pranishuprety/portfolio-website" name="Personal Website" desc="Showcases my projects and skills with a clean and responsive design. Built using JavaScript, React, and Bootstrap, powered by Vite." />
				<ProjectCard src={dogBreedFinder} link="https://pranishuprety.github.io/dogbreedfinder/" name="Dog Breed Finder" desc="Fetches random images of selected dog breeds every 5 seconds." />
				<ProjectCard src={projectDristi} link="http://bit.ly/3R0Xiud" name="Project Dristi" desc="Group project built in HackPrinceton - Spring 2025. A smart cane with the fusion of AI and IoT" />
				<ProjectCard src={carboknot} link="https://devpost.com/software/carboknot" name="CarboKnot" desc="HackPrinceton Spring 2026. Chrome extension that shows the carbon cost of products before you buy." />
				<ProjectCard src={respondr} link="https://devpost.com/software/respondr-zqegfs" name="Respondr" desc="Hack@URI 2026 winner. Emergency platform connecting patients to doctors with live wearable data." />
				<ProjectCard src={camppulse} link="https://devpost.com/software/camppulse" name="CampPulse" desc="Hoya Hacks 2026. Live campus heatmap for safety, crowds, and free food from student check-ins." />
				<ProjectCard src={neuronudge} link="https://devpost.com/software/neuronudge-exjr10" name="NeuroNudge" desc="HackPrinceton Fall 2025. Browser extension that detects focus drift and gently nudges you back." />
				<ProjectCard src={baymax} link="https://devpost.com/software/baymax-jqlo2b" name="Baymax" desc="HackDartmouth X. AI tool for therapists using facial and voice emotion analysis." />
			</InfiniteCarousel>
		</section>
	);
}

export default Projects;
