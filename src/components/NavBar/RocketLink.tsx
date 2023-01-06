import Link from "next/link";
import { Rocket } from "../../types/spacextype";

export default function RocketsNavBar({ rocket }: { rocket: Rocket }) {
  return (
    <li>
      <Link href={`/rocket/${rocket.id}`} key={rocket.id}>
        {rocket.name}
      </Link>
    </li>
  );
}
