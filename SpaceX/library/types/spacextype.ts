export type Rocket = {
  id: string;
  name: string;
  description: string;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  cost_per_launch: number;
  wikipedia: string;
  mass: {
    kg: number;
    lb: number;
  };
  boosters: number;
};
export type Launch = {
  id: string;
  details: string;
  mission_name: string;
  launch_year: string;
  links: {
    wikipedia: string;
  };
  launch_site: {
    site_name_long: string;
  };
};

export enum RocketThumbnail {
  falcon1 = "/img/falcon1Thumbnail.webp",
  falcon9 = "/img/falcon9Thumbnail.webp",
  falconheavy = "/img/falconheavyThumbnail.webp",
  starship = "/img/starshipThumbnail.webp",
}
