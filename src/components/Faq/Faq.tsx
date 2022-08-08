import FaqItem from "../FaqItem/FaqItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Faq.scss";

const Faq = () => {
  return (
    <section className="faq">
      <SectionTitle>Вопрос/Ответ</SectionTitle>
      <ul className="faq__list">
        <FaqItem
          question="Может ли ребёнок заниматься самостоятельно?"
          answer="Да, может."
        />
        <FaqItem
          question="Как происходит оплата?"
          answer="Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку."
        />
        <FaqItem
          question="Есть ли гарантии усвоения материала?"
          answer="Да, гарантии есть"
        />
        <FaqItem
          question="С кем будет общаться мой ребёнок?"
          answer="С другими детьми, а также с преподавателями."
        />
        <FaqItem
          question="Каковы принципы обучения?"
          answer="Обучить. Научить. Подбодрить."
        />
        <FaqItem
          question="Сколько раз в неделю можно заниматься?"
          answer="Занятия проходят 4 раза в неделю в удобное для Вас время"
        />
      </ul>
    </section>
  );
};

export default Faq;
