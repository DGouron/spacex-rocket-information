"use client";

import Image from "next/image";
import { Rocket, RocketThumbnail } from "../types/spacextype";
import styles from "./RocketView.module.css";

function RocketView(props: { rocket: Rocket }) {
  function getRocketThumbnailUrl(rocketId: string) {
    const thumbnail = RocketThumbnail[rocketId as keyof typeof RocketThumbnail];
    if (thumbnail) {
      return thumbnail;
    }
  }

  return (
    <section className={styles.rocketview__container}>
      <h2>{props.rocket.name}</h2>
      <div className={styles.rocketview__content}>
        <div className={styles.rocketview__description}>
          <h3>{props.rocket.description}</h3>
          <Image
            src={
              getRocketThumbnailUrl(props.rocket.id) || RocketThumbnail.falcon1
            }
            width={500}
            height={120}
            alt={props.rocket.name}
            className={styles.rocketview__thumbnail}
          />
        </div>
        <aside className={styles.rocketview__details}>
          <p>Country : {props.rocket.country}</p>
          <p>Company : {props.rocket.company}</p>
          <p>Boosters : {props.rocket.boosters}</p>
          <p>Mass : {props.rocket.mass.kg} kg</p>
          <p>
            First Flight :{" "}
            {new Date(props.rocket.first_flight).toLocaleDateString()}
          </p>
          <a
            href={props.rocket.wikipedia}
            target="_blank"
            className={styles.rocketView__wikilink}
          >
            Wikipedia
          </a>
        </aside>
      </div>
    </section>
  );
}

export default RocketView;
