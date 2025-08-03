import React from 'react'
import { useTranslation } from 'react-i18next'

const Info = () => {
const {t} = useTranslation();
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx  bx-medal-alt about__icon'></i> 

            <h3 className="about__title">{t('info.experience.title')}</h3>
            <div className="span about__subtitle">{t('info.experience.subtitle')}</div>
        </div>

        <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

            <h3 className="about__title">{t('info.completed.title')}</h3>
            <div className="span about__subtitle">{t('info.completed.subtitle')}</div>
        </div>

        <div className="about__box">
        <i class='bx  bx-message-circle-question-mark about__icon'></i> 

            <h3 className="about__title">{t('info.support.title')}</h3>
            <div className="span about__subtitle">{t('info.support.subtitle')}</div>
        </div>
    </div>
  )
}

export default Info