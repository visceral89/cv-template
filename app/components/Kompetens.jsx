import { competencey } from "../constants";
import styles from "./Kompetens.module.scss";

export default function Kompetens() {
	return (
		<>
			{competencey.map((item) => (
				<div className={styles.skillContainer} key={item.skill}>
					<div className={styles.skillName}>{item.skill}</div>
					<div
						className={styles.skillBar}
						style={{ width: `${item.level * 10}%` }}
					/>
				</div>
			))}
		</>
	);
}
