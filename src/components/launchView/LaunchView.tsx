"use client";

import { Launch } from "../../types/spacextype";
import LaunchRow from "./LaunchRow";

function LaunchView(props: { launches: Launch[] }) {
  return (
    <div>
      <h2>Launches</h2>
      {props.launches.map((launch) => {
        return <LaunchRow launch={launch} key={launch.id} />;
      })}
    </div>
  );
}

export default LaunchView;
