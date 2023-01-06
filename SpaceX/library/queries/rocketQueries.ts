import { Rocket } from "../types/spacextype";

export const getRocketById = async (id: string) => {
  const query = `
  query GetRocketById($id: ID!) {
    rocket(id: $id) {
      description
      country
      company
      boosters
      first_flight
      wikipedia
      id
      mass {
        kg
      }
      name
    }
  }
`;

  const variables = { id };

  const dataReceived = await fetch("https://api.spacex.land/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data } = await dataReceived.json();
  return data.rocket as Rocket;
};
