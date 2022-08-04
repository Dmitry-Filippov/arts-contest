import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <p className="about__text">
        Компания <span className="about__accent">СлонУм</span> – проводит
        конкурс для детей, в котором могут участвовать ребята{" "}
        <span className="about__accent about__accent_type_green">
          всех возрастов!
        </span>{" "}
        Номинации, в которых можно победить, есть возможность проявить себя во
        всех направлениях и даже{" "}
        <span className="about__accent about__accent_type_green">
          без художественных способностей.
        </span>
      </p>
    </section>
  );
};

export default About;
