import Image from "next/image";
import styles from "./page.module.css";
import jsPDF from "jspdf";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.heading}>
				<h1 className={styles.titleName}>Rasmus Bremholm</h1>
				<h2 className={styles.subTitle}>Frontend Developer</h2>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.sideBarLeft}></div>
				<div className={styles.sideBarRight}></div>
			</div>
		</main>
	);
}
