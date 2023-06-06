import Link from "next/link";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.main_wrapper}>
        <div className={`${styles.container} ${styles.wrapper__container}`}>
          <p className={styles.container__info}>from italian chef</p>
          <h1 className={styles.container__title}>
            The best pizza of Melbourne
          </h1>
          <div className={styles.container__btn}>
            <Link href="/menu" className={styles.btn}>
              Menu
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.description}>
        <h3 className={styles.description__text}>
          Homemade pizza, pressed to perfection.
        </h3>
      </div>
    </>
  );
}
