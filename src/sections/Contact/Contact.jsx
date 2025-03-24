import styles from './ContactStyles.module.css';

function Contact() {
	return (
		<section id="contact" className={styles.container}>
			<h1 className="sectionTitle">Contact</h1>
			<form name="contact" action="https://api.web3forms.com/submit" method="POST">
				<input type="hidden" name="access_key" value="9c93ad44-c8f9-4c25-83a1-b174a762b0fb" />
				<div className="formGroup">
					<label htmlFor="name" hidden>
						Name
					</label>
					<input type="text" name="name" id="name" placeholder="Name" required />
				</div>
				<div className="formGroup">
					<label htmlFor="email" hidden>
						Email
					</label>
					<input type="email" name="email" id="email" placeholder="Email" required />
				</div>
				<div className="formGroup">
					<label htmlFor="message" hidden>
						Message
					</label>
					<textarea name="message" id="message" placeholder="Message" required></textarea>
				</div>
				<input type="submit" className="hover btn" value="Submit" />
			</form>
		</section>
	);
}

export default Contact;
