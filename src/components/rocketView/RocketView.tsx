"use client";

import { Rocket } from "../../types/spacextype";
import styles from "./RocketView.module.css";

function RocketView(props: { rocket: Rocket }) {
  return (
    <section className={styles.rocketview__container}>
      <h2>{props.rocket.name}</h2>
      <div className={styles.rocketview__content}>
        <h3 className={styles.rocketview__description}>
          {props.rocket.description}
        </h3>
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
