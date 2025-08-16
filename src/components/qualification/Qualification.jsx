import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { t } = useTranslation();
  const q = t("qualification", { returnObjects: true });

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{q.section.title}</h2>
      <span className="section__subtitle">{q.section.subtitle}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {q.tabs.education}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {q.tabs.experience}
          </div>
        </div>

        <div className="qualification__sections">
          {/* Content 1*/}

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Content 1*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{q.education[0].title}</h3>
                <span className="qualification__subtitle">
                  {q.education[0].subtitle}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> {q.education[0].date}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Qualification data 2*/}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{q.education[1].title}</h3>
                <span className="qualification__subtitle">
                  {q.education[1].subtitle}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> {q.education[1].date}
                </div>
              </div>
            </div>

            {/* Qualification data 3*/}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Modify</h3>
                <span className="qualification__subtitle">Brasília - Udf</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* Qualification data 4*/}

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Modify...</h3>
                <span className="qualification__subtitle">Online - Alura</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
            </div> */}

            {/* Qualification data finish content 1 */}
          </div>

          {/* Content 2*/}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Qualification data 5*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {q.experience[0].title}
                </h3>
                <span className="qualification__subtitle">
                  {q.experience[0].subtitle}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {q.experience[0].date}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Qualification data 6*/}

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Modify...</h3>
                <span className="qualification__subtitle">Online - Alura</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
            </div> */}

            {/* Qualification data 7*/}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Modify...</h3>
                <span className="qualification__subtitle">Brasília - Udf</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* Qualification data 8*/}

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Modify...</h3>
                <span className="qualification__subtitle">Online - Alura</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
            </div> */}

            {/* Qualification data finish content 2*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
