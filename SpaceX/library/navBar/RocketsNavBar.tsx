import { Rocket } from "../../types/spacextype";
import RocketLink from "./RocketLink";
import styles from "./RocketsNavBar.module.css";

export default async function RocketsNavBar() {
  const query = `
  query {
    rockets {
      id
      name
      description
      success_rate_pct
    }
  }
`;

  const dataReceived = await fetch("https://api.spacex.land/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await dataReceived.json();

  return (
    <nav className={styles.nav__container}>
      <ul>
        {data.rockets.map((rocket: Rocket) => {
          return <RocketLink rocket={rocket} key={rocket.id} />;
        })}
      </ul>
    </nav>
  );
}
