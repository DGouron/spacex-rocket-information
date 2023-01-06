import RocketView from "../../../src/components/rocketView/RocketView";
import { Rocket } from "../../../src/types/spacextype";

type props = {
  params: {
    id: string;
  };
};

async function Page(props: props) {
  console.log("props.params.id", props.params.id);
  const id = props.params.id;
  const query = `
  query GetRocketById($id: ID!) {
    rocket(id: $id) {
      id
      description
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

  const rocketData: Rocket = data.rocket || undefined;
  console.log("rocketData", rocketData);

  return (
    <div>
      <RocketView rocket={rocketData} />
    </div>
  );
}

export default Page;
