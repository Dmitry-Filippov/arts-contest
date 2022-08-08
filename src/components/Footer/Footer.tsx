import "./Footer.scss";
import telegramLink from "../../imgs/telegram-icon.svg";
import yandexLink from "../../imgs/yandex-icon.svg";
import vkLink from "../../imgs/vk-icon.svg";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">Наши соцсети:</p>
        <ul className="footer__icons">
          <li>
            <a href="/" className="footer__telegram-icon">
              <img src={telegramLink} alt="telegram link" />
            </a>
          </li>
          <li>
            <a href="/" className="footer__telegram-icon">
              <img src={yandexLink} alt="yandex link" />
            </a>
          </li>
          <li>
            <a href="/" className="footer__telegram-icon">
              <img src={vkLink} alt="vk link" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__center">
        <nav className="footer__nav">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">Личный кабинет</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            <a href="/">Конфиденциальность</a>
          </li>
        </nav>
        <p className="footer__text footer__rights">
          &copy; Все права защищены. ООО”Слонум” 2022
        </p>
      </div>
      <div className="footer__right">
        <p className="footer__text">Наверх:</p>
        <button
          className="footer__button"
          onClick={() => {
            scroll.scrollToTop();
          }}
        ></button>
      </div>
    </footer>
  );
};

export default Footer;
