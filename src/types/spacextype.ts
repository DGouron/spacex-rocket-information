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
  details: string;
  mission_name: string;
};
