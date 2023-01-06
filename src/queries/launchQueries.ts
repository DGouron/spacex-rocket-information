import { Launch, Rocket } from "../types/spacextype";

export const getLaunchesById = async (id: string) => {
  const variables = { find: { rocket_id: id } };
  const query = `
  query GetLaunchesByRocketId($find: LaunchFind!) 
  {
    launches(find: $find){
    id
    mission_name
    details
    launch_year
    links {
      flickr_images
      wikipedia
    }
    launch_site {
      site_name_long
    }
    }
  }
`;
  try {
    const dataReceived = await fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await dataReceived.json();
    return data.launches as Launch[];
  } catch (error) {
    console.log("error custom", error);
  }
};
