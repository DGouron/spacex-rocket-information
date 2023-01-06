import LaunchView from "../../../src/components/launchView/LaunchView";
import RocketView from "../../../src/components/rocketView/RocketView";
import { getLaunchesById } from "../../../src/queries/launchQueries";
import { getRocketById } from "../../../src/queries/rocketQueries";
import { Rocket } from "../../../src/types/spacextype";

type props = {
  params: {
    id: string;
  };
};

async function Page(props: props) {
  const id = props.params.id;

  const rocketDataResponse = getRocketById(id);
  const rocketData = (await rocketDataResponse) || undefined;

  const launchDataResponse = getLaunchesById(id);
  const launchData = (await launchDataResponse) || undefined;

  return (
    <div>
      <RocketView rocket={rocketData} />
      <LaunchView launches={launchData} />
    </div>
  );
}

export default Page;
