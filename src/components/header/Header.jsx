import React, { useState, Fragment } from "react";
import "./header.css";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from "../icons/Icons";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  {
    /* ======== Toggle menu ======== */
  }
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  {
    /* ======== Change background header ======== */
  }
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  {
    /* ======== Theme button ======== */
  }
  const [mode, setMode] = useThemeSwitcher();

  const handleThemeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const ThemeSwitcherButton = ({ className }) => (
    <label
      className={`theme-switcher ${className}`}
      htmlFor={`theme-toggle-${className}`}
    >
      <input
        id={`theme-toggle-${className}`}
        type="checkbox"
        className="theme-switcher__input"
        checked={mode === "dark"}
        onChange={handleThemeChange}
      />
      <div className="theme-switcher__slider">
        <div className="theme-switcher__thumb">
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </label>
  );
  {
    /* ============================== */
  }
  {
    /* ======== Language button ======== */
  }

  const { t } = useTranslation();

  {
    /* ================================= */
  }

  return (
    <Fragment>
      <div className="mobile-controls__container">
        <LanguageSwitcher className="language-switcher-mobile" />
        <ThemeSwitcherButton className="theme-switcher-mobile" />
      </div>

      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Galletti
          </a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item nav__item-switcher">
                <LanguageSwitcher className="language-switcher-desktop" />
              </li>

              <li className="nav__item nav__item-switcher">
                <ThemeSwitcherButton className="theme-switcher-desktop" />
              </li>

              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>{" "}
                  {t("header.home")}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i> {t("header.about")}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>{" "}
                  {t("header.skills")}
                </a>
              </li>

              {/* <li className="nav__item">
                                <a href="#services" onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                  }>
                                    <i className="uil uil-briefcase-alt nav__icon"></i> {t('header.services')}
                                </a>
                            </li> */}

              {/* <li className="nav__item">
                                <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portifolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }>
                                    <i className="uil uil-scenery nav__icon"></i> {t('header.portfolio')}
                                </a>
                            </li> */}

              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i>{" "}
                  {t("header.contact")}
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
