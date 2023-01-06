"use client";

import { Rocket } from "../../types/spacextype";

function RocketView(props: { rocket: Rocket }) {
  return (
    <div>
      <h2>{props.rocket.name}</h2>
      <h3>{props.rocket.description}</h3>
      <p>Country : {props.rocket.country}</p>
      <p>Company : {props.rocket.company}</p>
      <p>Boosters : {props.rocket.boosters}</p>
      <p>Mass : {props.rocket.mass.kg} kg</p>
      <p>
        First Flight :{" "}
        {new Date(props.rocket.first_flight).toLocaleDateString()}
      </p>
      <p>
        <a href={props.rocket.wikipedia} target="_blank">
          Wikipedia
        </a>
      </p>
    </div>
  );
}

export default RocketView;
