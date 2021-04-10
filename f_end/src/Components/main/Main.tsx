import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Main.scss";


export const Main: FC = () => {
  return (
    <>
      <section className="main_wrapper">
        <div className="container wrapper__container">
          <p className="container__info">from italian chef</p>
          <h1 className="container__title">The best pizza of Melbourne</h1>
          <div className="container__btn">
            <NavLink to='/menu'>
              <button className="btn">
                Menu
              </button>
            </NavLink>
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
};
