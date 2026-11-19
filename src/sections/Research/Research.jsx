import styles from '../Project/ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import flightResearch from '../../assets/flight-research.svg';
import delayResearch from '../../assets/delay-research.svg';

// TODO: replace POSTER_FILE_ID placeholders with the Google Drive poster links.
function Research() {
	return (
		<section id="research" className={styles.container}>
			<h1 className="sectionTitle">Research</h1>
			<div className={styles.researchRow}>
				<ProjectCard
					src={flightResearch}
					link="/flightpath/"
					name="Flight Path Simulation and Terrain-Aware Navigation System for Mountainous Airspaces"
					desc="Advisor: Dr. Vladislav Veksler. Funded by STEM Advance, Summer 2025. Poster presented at Research Day 2026."
					links={[
						{ label: 'Poster', href: 'https://drive.google.com/file/d/POSTER_FILE_ID/view' },
						{ label: 'Demo', href: '/flightpath/' },
						{ label: 'GitHub', href: 'https://github.com/pranishuprety/personal-react-website/tree/main/public/flightpath' },
					]}
				/>
				<ProjectCard
					src={delayResearch}
					link="https://github.com/pranishuprety/stemadvance2026"
					name="Quantifying and Forecasting the Impact of the 2025 U.S. Government Shutdown on New York–Metro Flight Delays"
					desc="Advisor: Dr. Sushil Poudel. Funded by STEM Advance, Summer 2026. Poster presented at Fall 2026 Research Day."
					links={[
						{ label: 'Poster', href: 'https://drive.google.com/file/d/POSTER_FILE_ID/view' },
						{ label: 'GitHub', href: 'https://github.com/pranishuprety/stemadvance2026' },
					]}
				/>
			</div>
		</section>
	);
}

export default Research;
