import SectionTitle from "../SectionTitle/SectionTitle";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits">
      {/* <h2 className="benefits__title">
        Для чего <span>нужно</span> участвовать
      </h2> */}
      <SectionTitle>
        Для чего <span className="benefits__underline">нужно</span> участвовать
      </SectionTitle>
      <ul className="benefits__list">
        <li className="benefits__item">
          <div className="benefits__icon star"></div>
          <p className="benefits__capture">
            Шанс занять 1 место — в вашем городе и по всей России
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__icon winne"></div>
          <p className="benefits__capture">
            Развитие самостоятельности + свободное время для родителей {";)"}
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__icon sertification"></div>
          <p className="benefits__capture">
            Персональный диплом в разных номинациях каждому участнику
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__icon gift"></div>
          <p className="benefits__capture">
            Призы и скидки для подписчиков и авторизованных пользователей
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__icon email"></div>
          <p className="benefits__capture">
            Бесплатный диплом на email — через 1 день после конкурса
          </p>
        </li>

        <li className="benefits__item">
          <div className="benefits__icon vk"></div>
          <p className="benefits__capture">
            Публикация работ победителей во ВКонтакте.{" "}
            <span>
              <a href="/#" target="blank">
                Подписывайтесь!
              </a>
            </span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
