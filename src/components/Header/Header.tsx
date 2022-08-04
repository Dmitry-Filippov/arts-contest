import { Link } from "react-router-dom";
import "./Header.scss";
import stars from "../../imgs/звезды.svg";
import { useState } from "react";

const Header = () => {
  const [isSpaceVisible, setIsSpaceVisible] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <div className="header__menu">
          <div className="header__logo"></div>
          <Link
            to="/"
            className={`header__login-link ${
              isSpaceVisible ? "" : "header__login-link_orange"
            }`}
          >
            Войти
          </Link>
        </div>

        <p className="header__caption">От компании СлонУМ</p>
        <h1 className="header__title">
          Всероссийский конкурс <br /> Детского рисунка
        </h1>
        <p className="header__subtitle">
          Участвуйте в конкурсе и получайте призы в различных номинациях <br />
          детского рисунка для всех возрастов
        </p>

        <div className="header__wrapper">
          <button className="header__button">Участвовать</button>
          <div className="header__timer">
            <p className="header__timer-days">
              01 <span>дней</span>
            </p>
            <p className="header__timer-breacker">:</p>
            <p className="header__timer-hours">
              09 <span>часов</span>{" "}
              <span className="header__timer-caption">по МСК</span>
            </p>
            <p className="header__timer-breacker">:</p>
            <p className="header__timer-minutes">
              43 <span>минут</span>
            </p>
          </div>
        </div>

        <div
          className={`header__spase ${
            isSpaceVisible ? "header__spase_visible" : ""
          }`}
          onLoad={() => {
            setTimeout(() => {
              setIsSpaceVisible(true);
            }, 1000);
          }}
        >
          <img src={stars} alt="звёзды" className="header__stars" />
          <div className="header__space-plane"></div>
          <div className="header__space-elefant"></div>
          <div className="header__space-alarm"></div>
          <div className="header__space-lamp"></div>
          <div className="header__space-planet-one"></div>
          <div className="header__space-planet-two"></div>
          <div className="header__space-planet-three"></div>
          <div className="header__space-atom"></div>
          <div className="header__space-math-del"></div>
          <div className="header__space-plus"></div>
          <div className="heder__space-palitra"></div>
          <div className="header__space-rocket"></div>
          <div className="header__space-boul"></div>
        </div>
        <div className="header__girl"></div>
        <div className="header__pen"></div>
        <div className="header__planes"></div>
      </header>

      {/* svg */}
      <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M1,0.463 V0 H0 C0,0,0.059,0.078,0.037,0.186 C0.015,0.293,0.082,0.515,0.154,0.545 C0.227,0.575,0.185,0.68,0.252,0.8 C0.319,0.919,0.347,0.83,0.383,0.856 C0.398,0.866,0.405,0.926,0.452,0.914 C0.486,0.905,0.521,0.881,0.533,0.889 C0.545,0.897,0.553,1,0.553,1 C0.553,1,0.625,0.969,0.64,0.938 C0.655,0.907,0.74,0.811,0.738,0.672 C0.738,0.625,0.757,0.576,0.846,0.616 C0.935,0.656,1,0.599,1,0.463"></path>
        </clipPath>
      </svg>
    </>
  );
};

export default Header;
