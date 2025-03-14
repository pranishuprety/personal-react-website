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
			<div className={styles.skillList}>
				<SkillList skill="HTML" icon={checkMarkIcon} />
				<SkillList skill="CSS" icon={checkMarkIcon} />
				<SkillList skill="JavaScript" icon={checkMarkIcon} />
				<SkillList skill="Python" icon={checkMarkIcon} />
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList skill="Django" icon={checkMarkIcon} />
				<SkillList skill="React" icon={checkMarkIcon} />
				<SkillList skill="Flask" icon={checkMarkIcon} />
			</div>
			<hr />
		</section>
	);
}

export default Skills;
