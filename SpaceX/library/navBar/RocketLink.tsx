import Link from "next/link";
import { Rocket, RocketThumbnail } from "../types/spacextype";
import styles from "./RocketsNavBar.module.css";

export default function RocketsNavBar({ rocket }: { rocket: Rocket }) {
  function getRocketThumbnailUrl(rocketId: string) {
    const thumbnail = RocketThumbnail[rocketId as keyof typeof RocketThumbnail];
    if (thumbnail) {
      return thumbnail;
    }
  }

  const rocketImageUrl = getRocketThumbnailUrl(rocket.id);

  return (
    <Link
      href={`/rocket/${rocket.id}`}
      key={rocket.id}
      className={styles.rocketnav__link}
      style={{ backgroundImage: `url(${rocketImageUrl})` }}
    >
      {rocket.name}
    </Link>
  );
}
