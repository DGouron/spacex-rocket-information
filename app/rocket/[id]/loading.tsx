import LoadingSpinner from "../../../src/components/loader/LoadingSpinner";
import styles from "../../../src/components/loader/LoadingSpinner.module.css";

export default function Loading() {
  return (
    <section className={styles.loading__container}>
      <h2>Rocket loading...</h2>
      <LoadingSpinner />
    </section>
  );
}
