import SectionTitle from "../SectionTitle/SectionTitle";
import "./Diploma.scss";
import diploma from "../../imgs/diploma.jpg";

const Diploma = () => {
  return (
    <section className="diploma">
      <div className="diploma__content">
        <div className="diploma__text">
          <SectionTitle>
            Выдаём <span className="diploma__underline">дипломы</span>{" "}
            участникам
          </SectionTitle>
          <p className="diploma__paragraph">
            Жюри конкурса рассмотрит работы и выделит победителей по городам и
            возрастным категориям, а также определит другие номинации,
            подчеркнув уникальную особенность каждого конкретного рисунка —
            дипломы получат все дети! <br />
            <br /> Скачать диплом можно будет в личном кабинете через сутки
            после окончания конкурса, дополнительно вышлем его на e-mail. <br />{" "}
            <br /> Со слоном к победам напролом!
          </p>
        </div>
        <img src={diploma} alt="образец диплома" className="diploma__diploma" />
      </div>
    </section>
  );
};

export default Diploma;
