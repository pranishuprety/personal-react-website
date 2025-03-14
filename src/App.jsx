import './App.css';
import Contact from './sections/Contact/Contact.jsx';
import Footer from './sections/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Project from './sections/Project/Project.jsx';
import Skills from './sections/Skills/Skills.jsx';

function App() {
	return (
		<>
			<Hero />
			<Project/>
			<Skills/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
