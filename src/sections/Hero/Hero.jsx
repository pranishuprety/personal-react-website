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

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const emailIcon = theme === 'light' ? emailLight : emailDark;
    const devpostIcon = theme === 'light' ? devpostLight : devpostDark;

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
                <h2>FullStack Developer</h2>
                <span>
                    <a href="mailto:pranishuprety7@gmail.com">
                        <img src={emailIcon} alt="Email icon" />
                    </a>
                    <a href="https://github.com/pranishuprety" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/pranish-uprety/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://devpost.com/pranishuprety" target="_blank">
                        <img src={devpostIcon} alt="Devpost icon" />
                    </a>
                </span>
                <p className={styles.description}>Honors CS &amp; Maths at Caldwell University | Research Assistant at CogAI Lab | Aviation Enthusiast</p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
