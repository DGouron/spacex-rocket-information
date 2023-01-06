import LaunchView from "../../../SpaceX/library/launchView/LaunchView";
import { getLaunchesById } from "../../../SpaceX/library/queries/launchQueries";
import { getRocketById } from "../../../SpaceX/library/queries/rocketQueries";
import RocketView from "../../../SpaceX/library/rocketView/RocketView";

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
      {/* @ts-expect-error Server Component */}
      <LaunchView launches={launchData} />
    </div>
  );
}

export default Page;
