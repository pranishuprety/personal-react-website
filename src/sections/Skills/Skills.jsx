import styles from './SkillsStyles.module.css';

const skillGroups = [
	{
		title: 'Programming',
		skills: ['Python', 'JavaScript', 'C', 'Matlab', 'C++', 'Ruby', 'R'],
	},
	{
		title: 'Web / Media',
		skills: ['HTML/CSS', 'jQuery', 'Bootstrap', 'Flask', 'Express', 'Git', 'Photoshop'],
	},
	{
		title: 'Databases',
		skills: ['SQL', 'PostgreSQL', 'NoSQL'],
	},
];

function Skills() {
	return (
		<section id="skills" className={styles.container}>
			<h1 className="sectionTitle">Skills</h1>
			<div className={styles.groups}>
				{skillGroups.map((group) => (
					<div key={group.title} className={styles.group}>
						<p className={styles.groupTitle}>{group.title}</p>
						<p className={styles.skills}>{group.skills.join(' · ')}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
