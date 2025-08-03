import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <div className="span skills__level">Advanced</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <div className="span skills__level">Advanced</div>
                    </div>
                </div>

                {/* <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name"></h3>
                        <div className="span skills__level"></div>
                    </div>
                </div> */}
            </div>

            {/* Group 2 */}

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">React</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Git</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                {/* <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name"></h3>
                        <div className="span skills__level"></div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Frontend;