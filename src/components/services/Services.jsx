import React, { useState } from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import PcBuildingImg from "../../assets/pcbuilding.png";
import DrCheckImg from "../../assets/drcheck.png";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { t } = useTranslation();

  // Dados do JSON traduzido
  const service = t("services.service", { returnObjects: true });
  const project = t("services.project", { returnObjects: true });

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("header.services")}</h2>
      <span className="section__subtitle">{t("services.subtitle")}</span>

      <div className="services__container container grid">
        {/* Service */}
        <div className="services__content">
          <img src={PcBuildingImg} alt="" className="service__img" />
          <div>
            <div className="services__category-container">
              <h3 className="services__category-service">{service.type}</h3>
            </div>
            <i className="uil uil-desktop services__icon"></i>
            <h3 className="services__title">
              {service.title1} <br /> {service.title2}
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            {service.viewMoreButton || t("services.viewMoreButton")}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">{service.modal.title}</h3>
              <p className="services__modal-description">
                {service.modal.description}
              </p>

              <ul className="services__modal-services grid">
                {service.modal.features.map((feature, idx) => (
                  <li className="services__modal-service" key={idx}>
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project */}
        <div className="services__content">
          <img src={DrCheckImg} alt="" className="service__img" />
          <div>
            <div className="services__category-container">
              <h3 className="services__category-project">{project.type}</h3>
              {project.status && (
                <h3 className="services__category-progress">
                  {project.status}
                </h3>
              )}
            </div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              {project.title1} <br /> {project.title2}
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            {project.viewMoreButton || t("services.viewMoreButton")}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">{project.modal.title}</h3>
              <p className="services__modal-description">
                {project.modal.description}
              </p>

              <ul className="services__modal-services grid">
                {project.modal.features.map((feature, idx) => (
                  <li className="services__modal-service" key={idx}>
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    {typeof feature === "string" ? (
                      <p className="services__modal-info">{feature}</p>
                    ) : (
                      <p className="services__modal-info">
                        {feature.text}
                        <a
                          className="modal-link"
                          href="https://github.com/victorgalletti"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {feature.github}
                        </a>
                        .
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Service content 3 */}
      </div>
    </section>
  );
};

export default Services;
