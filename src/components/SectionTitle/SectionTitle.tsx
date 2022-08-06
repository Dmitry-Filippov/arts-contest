import { ReactNode } from "react";
import "./SectionTitle.scss";

type props = {
  children: ReactNode;
};

const SectionTitle = ({ children }: props) => {
  return <h2 className="section-title">{children}</h2>;
};

export default SectionTitle;
