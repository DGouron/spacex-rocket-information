"use client";

import { Launch } from "../types/spacextype";
import styles from "./Launch.module.css";

function LaunchRow(props: { launch: Launch }) {
  return (
    <article className={styles.launch__row}>
      <div>
        <h2 className={styles.launch__row__title}>
          {props.launch.mission_name}
        </h2>
        <h3 className={styles.launch__row__details}>{props.launch.details}</h3>
        <p>Launch year : {props.launch.launch_year}</p>
      </div>
      <aside>
        <p>Launch on this site : {props.launch.launch_site.site_name_long}</p>
        <p>
          You can read more informations here :{" "}
          <a href={props.launch.links.wikipedia} target="_blank">
            Wikipedia
          </a>
        </p>
      </aside>
    </article>
  );
}

export default LaunchRow;
