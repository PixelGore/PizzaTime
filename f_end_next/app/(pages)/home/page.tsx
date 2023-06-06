import Link from "next/link";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <section className="main_wrapper">
        <div className="container wrapper__container">
          <p className="container__info">from italian chef</p>
          <h1 className="container__title">The best pizza of Melbourne</h1>
          <div className="container__btn">
            <Link href="/menu" className="btn">
              Menu
            </Link>
          </div>
        </div>
      </section>
      <div className="description">
        <h3 className="description__text">
          Homemade pizza, pressed to perfection.
        </h3>
      </div>
    </>
  );
}
