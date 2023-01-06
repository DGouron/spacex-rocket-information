import Link from "next/link";
import { Rocket } from "../../types/spacextype";
import styles from "./RocketsNavBar.module.css";

export default function RocketsNavBar({ rocket }: { rocket: Rocket }) {
  return (
    <Link
      href={`/rocket/${rocket.id}`}
      key={rocket.id}
      className={styles.rocketnav__link}
    >
      {rocket.name}
    </Link>
  );
}
