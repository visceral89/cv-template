import { experience } from "../constants";
import styles from "./Kompetens.module.scss";

export default function Experience() {
	return (
		<>
			{experience.map((item) => (
				<div className={styles.skillContainer} key={item.title}>
					<div className={styles.titleContainer}>
						<h3>
							{item.title},{item.workplace}
						</h3>
						<span>{item.time}</span>
						<ul>
							{item.desc.map((descItem, descIndex) => (
								<li key={descIndex}>{descItem}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</>
	);
}
