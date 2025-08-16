import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("sectionskills.title")}</h2>
      <span className="section__subtitle">{t("sectionskills.subtitle")}</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
