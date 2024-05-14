import styles from "./page.module.scss";
import { personalInfo } from "./constants";

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
					<h2>Adress: {personalInfo.adress}</h2>
				</div>
				<div className={styles.sideBarRight}></div>
			</div>
		</main>
	);
}
