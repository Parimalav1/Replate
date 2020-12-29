import React from 'react';

export default function Team(){
    return(
        <div className="aboutcontainertop">
            <section className="aboutcontainer"> 
                <div className="contents one">
                    <div className="pros-cons">
                        <img src="assets/replate-team-5.png" alt=''/>
                        <div className="uses">
                            <h3>Jeffrey Orndorff</h3>
                            <h4>Team Leader, Lambda School</h4>
                        </div>
                    </div>
                </div>
                <div className="contents one">
                    <div className="pros-cons">
                        <img src="assets/replate-team-2.jpeg" alt=''/>
                        <div className="uses">
                            <h3>Gordon Caister</h3>
                            <h4>API Backend Engineer, Lambda School</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutcontainer1'>
                <div className="contents two">
                    <div className="pros-cons">
                        <img src="assets/replate-team-1.jpeg" alt=''/>
                        <div className="uses">
                            <h3>Parimala Vemula</h3>
                            <h4>UI Engineer, Lambda School</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutcontainer">
                <div className="contents one">
                    <div className="pros-cons">
                        <img src="assets/replate-team-3.png" alt=''/>
                        <div className="uses">
                            <h3>Kate McGee</h3>
                            <h4>Frontend Engineer, Lambda School</h4>
                        </div>
                    </div>
                </div>
                <div className="contents one">
                    <div className="pros-cons">
                        <img src="assets/replate-team-4.jpeg" alt=''/>
                        <div className="uses">
                            <h3>Allan Pimble</h3>
                            <h4>Frontend Engineer, Lambda School</h4>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='footer'>
                <nav>
                    <a href="http://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a href="http://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="http://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                </nav>
            </footer>
        </div>
    )
};