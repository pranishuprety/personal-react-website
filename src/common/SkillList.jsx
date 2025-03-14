function SkillList({ skill, icon }) {
	return (
		<span>
			<img src={icon} alt="checkmark Icon" />
			<p>{skill}</p>
		</span>
	);
}

export default SkillList;
