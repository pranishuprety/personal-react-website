import styles from '../sections/Project/ProjectStyles.module.css';

function ProjectCard({ src, link, name, desc, links, wordmark, keepColor }) {
	const media = src ? (
		<img className={`hover${keepColor ? ` ${styles.keepColor}` : ''}`} src={src} alt={`${name} logo`} />
	) : wordmark ? (
		<div className={styles.wordmark} aria-hidden="true">
			{name}
		</div>
	) : (
		<div className={styles.placeholder} />
	);

	const body = (
		<>
			{media}
			<h3>{name}</h3>
			<p>{desc}</p>
		</>
	);

	if (links) {
		const main = link ? (
			<a href={link} target="_blank" rel="noreferrer" className={styles.cardMain}>
				{body}
			</a>
		) : (
			<div className={styles.cardMain}>{body}</div>
		);

		return (
			<div className={styles.card}>
				{main}
				<div className={styles.links}>
					{links.map(({ label, href }) => (
						<a key={label} href={href} target="_blank" rel="noreferrer">
							{label}
						</a>
					))}
				</div>
			</div>
		);
	}

	if (!link) {
		return <div className={styles.cardPlain}>{body}</div>;
	}

	return (
		<a href={link} target="_blank" rel="noreferrer">
			{body}
		</a>
	);
}

export default ProjectCard;
