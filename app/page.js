import styles from "./page.module.scss";
import { personalInfo, profil } from "./constants";
import Kompetens from "./components/kompetens";
import Experience from "./components/Experience";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.heading}>
				<h1 className={styles.titleName}>
					{personalInfo.firstname + personalInfo.lastname}
				</h1>
				<h2 className={styles.subTitle}>{personalInfo.subheading}</h2>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.sideBarLeft}>
					<h1>Detaljer</h1>
					<h2>Adress</h2>
					{personalInfo.adress}
					<h2>Telefon</h2>
					{personalInfo.tel}
					<h2>Email</h2>
					{personalInfo.email}
					<h2>Github</h2>
					{personalInfo.github}
					<div className={styles.skills}>
						<h1>Kompetens</h1>
						<Kompetens />
					</div>
				</div>
				<div className={styles.sideBarRight}>
					<div className={styles.profile}>
						<h1>{profil.title}</h1>
						{profil.text}
					</div>
					<div className={styles.experience}>
						<h1>Arbetslivserfarenhet</h1>
						<Experience />
					</div>
				</div>
			</div>
		</main>
	);
}
