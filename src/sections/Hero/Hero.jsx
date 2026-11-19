import { useEffect, useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.png';
import devpostLight from '../../assets/devpost-light.svg';
import devpostDark from '../../assets/devpost-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

const ROTATING_TITLES = [
	'FULLSTACK DEVELOPER',
	'CS & MATH STUDENT',
	'UNDERGRADUATE RESEARCHER',
	'TUTOR',
	'AVIATION ENTHUSIAST',
	'TEACHING ASSISTANT',
];

function Hero() {
	const { theme, toggleTheme } = useTheme();
	const [titleIndex, setTitleIndex] = useState(0);
	const [fadeIn, setFadeIn] = useState(true);
	const [reduceMotion, setReduceMotion] = useState(false);

	useEffect(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => setReduceMotion(media.matches);
		update();
		media.addEventListener('change', update);
		return () => media.removeEventListener('change', update);
	}, []);

	useEffect(() => {
		if (reduceMotion) return undefined;

		const interval = setInterval(() => {
			setFadeIn(false);
			window.setTimeout(() => {
				setTitleIndex((current) => (current + 1) % ROTATING_TITLES.length);
				setFadeIn(true);
			}, 450);
		}, 3500);

		return () => clearInterval(interval);
	}, [reduceMotion]);

	const themeIcon = theme === 'light' ? sun : moon;
	const githubIcon = theme === 'light' ? githubLight : githubDark;
	const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
	const emailIcon = theme === 'light' ? emailLight : emailDark;
	const devpostIcon = theme === 'light' ? devpostLight : devpostDark;
	const subtitle = reduceMotion ? 'STUDENT & DEVELOPER' : ROTATING_TITLES[titleIndex];

	return (
		<section id="hero" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img src={heroImg} className={styles.hero} alt="Profile picture of Pranish Uprety" />
				<img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
			</div>
			<div className={styles.info}>
				<h1>
					Pranish
					<br />
					Uprety
				</h1>
				<div className={styles.subtitleBlock}>
					<h2 className={`${styles.subtitle} ${fadeIn ? styles.subtitleVisible : styles.subtitleHidden}`}>{subtitle}</h2>
					{!reduceMotion && (
						<div className={styles.subtitleDots} aria-hidden="true">
							{ROTATING_TITLES.map((title, index) => (
								<span key={title} className={index === titleIndex ? styles.dotActive : styles.dot} />
							))}
						</div>
					)}
				</div>
				<span>
					<a href="mailto:pranishuprety7@gmail.com" aria-label="Email">
						<img src={emailIcon} alt="" />
					</a>
					<a href="https://github.com/pranishuprety" target="_blank" rel="noreferrer" aria-label="GitHub">
						<img src={githubIcon} alt="" />
					</a>
					<a href="https://www.linkedin.com/in/pranish-uprety/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
						<img src={linkedinIcon} alt="" />
					</a>
					<a href="https://devpost.com/pranishuprety" target="_blank" rel="noreferrer" aria-label="Devpost">
						<img src={devpostIcon} alt="" />
					</a>
				</span>
				<p className={styles.description}>Honors CS &amp; Maths at Caldwell University | Research Assistant at CogAI Lab | Aviation Enthusiast</p>
				<a href={CV} download>
					<button className="hover" type="button">
						Resume
					</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
