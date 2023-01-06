"use client";

import { Launch } from "../../types/spacextype";
import LaunchView from "./LaunchView";

function LaunchRow(props: { launch: Launch }) {
  return (
    <div>
      <h2>{props.launch.mission_name}</h2>
      <h3>{props.launch.details}</h3>
      <p>{props.launch.launch_year}</p>
      <p>Launch on this site : {props.launch.launch_site.site_name_long}</p>
      <p>
        You can read more informations here :{" "}
        <a href={props.launch.links.wikipedia} target="_blank">
          Wikipedia
        </a>
      </p>
    </div>
  );
}

export default LaunchRow;
