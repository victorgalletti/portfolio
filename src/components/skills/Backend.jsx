import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Computer Networks</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Docker</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Node.Js</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>
            </div>

            {/* Group 2 */}

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <div className="span skills__level">Basic</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Linux</h3>
                        <div className="span skills__level">Basic</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Cloud</h3>
                        <div className="span skills__level">Intermediate</div>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx  bx-badge-check'></i> 

                    <div>
                        <h3 className="skills__name">Cybersecurity</h3>
                        <div className="span skills__level">Basic</div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Backend