import styles from '../sections/Project/ProjectStyles.module.css';

function ProjectCard({ src, link, name, desc, links }) {
	const image = src ? <img className="hover" src={src} alt={`${name} logo`} /> : <div className={styles.placeholder} />;

	if (links) {
		return (
			<div className={styles.card}>
				<a href={link} target="_blank" className={styles.cardMain}>
					{image}
					<h3>{name}</h3>
					<p>{desc}</p>
				</a>
				<div className={styles.links}>
					{links.map(({ label, href }) => (
						<a key={label} href={href} target="_blank">{label}</a>
					))}
				</div>
			</div>
		);
	}

	return (
		<a href={link} target="_blank">
			{image}
			<h3>{name}</h3>
			<p>{desc}</p>
		</a>
	);
}

export default ProjectCard;
