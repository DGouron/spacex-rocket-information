import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={styles.container}>
      <h2 className={styles.message}>
        No rocket selected. Please select a rocket from the navigation bar.
      </h2>
    </section>
  );
}
