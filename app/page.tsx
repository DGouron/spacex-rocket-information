import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2 className={styles.title}>
          No rocket selected. Please select a rocket from the navigation bar.
        </h2>
      </div>
    </main>
  );
}
