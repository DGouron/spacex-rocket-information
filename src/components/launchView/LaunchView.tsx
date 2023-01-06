"use client";

import { Launch } from "../../types/spacextype";
import LaunchRow from "./LaunchRow";
import styles from "./Launch.module.css";

function LaunchView(props: { launches: Launch[] }) {
  return (
    <section className={styles.launch__container}>
      <h2>Launches</h2>
      {props.launches.map((launch) => {
        return <LaunchRow launch={launch} key={launch.id} />;
      })}
    </section>
  );
}

export default LaunchView;
