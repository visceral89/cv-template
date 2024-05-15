import { experience } from "../constants";
import styles from "./Kompetens.module.scss";

export default function Experience() {
	return (
		<>
			{experience.map((item) => (
				<div className={styles.skillContainer} key={item.title}>
					<div className={styles.titleContainer}>
						{item.title},{item.workplace}
					</div>
				</div>
			))}
		</>
	);
}
