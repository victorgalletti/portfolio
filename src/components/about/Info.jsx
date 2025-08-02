import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx  bx-medal-alt about__icon'></i> 

            <h3 className="about__title">Experience</h3>
            <div className="span about__subtitle">2 Years Working</div>
        </div>

        <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

            <h3 className="about__title">Completed</h3>
            <div className="span about__subtitle">3 Projects</div>
        </div>

        <div className="about__box">
        <i class='bx  bx-message-circle-question-mark about__icon'></i> 

            <h3 className="about__title">Support</h3>
            <div className="span about__subtitle">Online 24/7</div>
        </div>
    </div>
  )
}

export default Info