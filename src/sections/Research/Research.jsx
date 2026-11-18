import styles from '../Project/ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

// TODO: add poster images (src) and the shutdown paper link.
function Research() {
	return (
		<section id="research" className={styles.container}>
			<h1 className="sectionTitle">Research</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard link="/flightpath/" name="Flight Path Simulation and Terrain-Aware Navigation System for Mountainous Airspaces" desc="Advisor: Dr. Vladislav Veksler. Funded by STEM Advance, Summer 2025. Poster presented at Research Day 2026." />
				<ProjectCard link="#" name="Quantifying and Forecasting the Impact of the 2025 U.S. Government Shutdown on New York–Metro Flight Delays" desc="Advisor: Dr. Sushil Poudel. Funded by STEM Advance, Summer 2026. Poster presented at Fall 2026 Research Day." />
			</div>
		</section>
	);
}

export default Research;
