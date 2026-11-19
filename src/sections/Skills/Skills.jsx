import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
	const { theme } = useTheme();
	const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

	return (
		<section id="skills" className={styles.container}>
			<h1 className="sectionTitle">Skills</h1>
			<p className={styles.group}>Programming</p>
			<div className={styles.skillList}>
				<SkillList skill="Python" icon={checkMarkIcon} />
				<SkillList skill="JavaScript" icon={checkMarkIcon} />
				<SkillList skill="C" icon={checkMarkIcon} />
				<SkillList skill="Matlab" icon={checkMarkIcon} />
				<SkillList skill="C++" icon={checkMarkIcon} />
				<SkillList skill="Ruby" icon={checkMarkIcon} />
				<SkillList skill="R" icon={checkMarkIcon} />
			</div>
			<hr />
			<p className={styles.group}>Web / Media</p>
			<div className={styles.skillList}>
				<SkillList skill="HTML/CSS" icon={checkMarkIcon} />
				<SkillList skill="jQuery" icon={checkMarkIcon} />
				<SkillList skill="Bootstrap" icon={checkMarkIcon} />
				<SkillList skill="Flask" icon={checkMarkIcon} />
				<SkillList skill="Express" icon={checkMarkIcon} />
				<SkillList skill="Git" icon={checkMarkIcon} />
				<SkillList skill="Photoshop" icon={checkMarkIcon} />
			</div>
			<hr />
			<p className={styles.group}>Databases</p>
			<div className={styles.skillList}>
				<SkillList skill="SQL" icon={checkMarkIcon} />
				<SkillList skill="PostgreSQL" icon={checkMarkIcon} />
				<SkillList skill="NoSQL" icon={checkMarkIcon} />
			</div>
		</section>
	);
}

export default Skills;
