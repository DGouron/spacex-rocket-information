"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section>
      <h2>This rocket doesnt exist ! Maybe you are in the future ?</h2>
      <button onClick={() => reset()}>Reset error boundary</button>
      <Link href="/">Go back to the present</Link>
    </section>
  );
}
