import styles from '../sections/Project/ProjectStyles.module.css';

function ProjectCard({ src, link, name, desc }) {
	return (
		<a href={link} target="_blank">
			{src ? <img className="hover" src={src} alt={`${name} logo`} /> : <div className={styles.placeholder} />}
			<h3>{name}</h3>
			<p>{desc}</p>
		</a>
	);
}

export default ProjectCard;
