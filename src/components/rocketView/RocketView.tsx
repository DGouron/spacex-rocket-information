"use client";

import { Rocket } from "../../types/spacextype";

function RocketView(props: { rocket: Rocket }) {
  return <div>{props.rocket.description}</div>;
}

export default RocketView;
