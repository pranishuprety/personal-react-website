import styles from './ProjectStyles.module.css';
import soccerhub from '../../assets/soccerhub.png';
import pranish from '../../assets/pranish.png';
import ProjectCard from '../../common/ProjectCard';
import dogBreedFinder from '../../assets/dog-breed-finder.png';

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard src={soccerhub} link="https://pranishuprety.github.io/soccerhub/" name="SoccerHub" desc="Tracks live soccer scores, upcoming matches, and stats for top leagues in real time." />
				<ProjectCard src={pranish} link="https://github.com/pranishuprety/portfolio-website" name="Personal Website" desc="Showcases my projects and skills with a clean and responsive design. Built using JavaScript, React, and Bootstrap, powered by Vite." />
				<ProjectCard src={dogBreedFinder} link="https://pranishuprety.github.io/dogbreedfinder/" name="Dog Breed Finder" desc="Fetches random images of selected dog breeds every 5 seconds." />
			</div>
		</section>
	);
}

export default Projects;
