import styles from "./page.module.scss";
import { personalInfo } from "./constants";
import Kompetens from "./components/kompetens";

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
				<div className={styles.sideBarRight}></div>
			</div>
		</main>
	);
}
