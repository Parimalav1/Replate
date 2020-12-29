import React from 'react';

export default function Home(){
    return(
        <div>
            <section className="title-container">
                <div id='pDiv'>
                    <p>If you can't feed a hundred people, then just feed one - Mother Teresa</p>
                </div>
            </section>
            <section id='container'>
                <h2>What is Replate?</h2>
                <p> Replating is filling the plate with leftover food or unused food and redistribute it to local hungry populations via food pantries, soup kitchens, shelters, and afterschool programs.
                    Replate collects information about volunteers and donors or business, forms a niche in which it can do the purpose of redistributing food in an efficient way to needy people. 
                    Replate reduces wastage of food and makes a happy and green planet.
                    </p>
            </section>
            <hr id='hr'/>
            <section className="container1">
                <div className="testimonial">
                    <img src="assets/replate7.jpeg" alt=''/>
                    <div className="uses">
                        <h3>Volunteer Testimonial</h3>
                        <h4>Dave, IT professional</h4>
                        <p>"It's now almost a year since I started working with the team, I can proudly say my life has never
                            been better! Serving hot and healthy breakfast to these less fortunate school children may seem like
                            an act of giving, but in reality I have received much more from them. The satisfaction I have
                            derived from their love and laughter is simply unparalleled." </p>
                    </div>
                </div>
                <div className="testimonial">
                    <img src="assets/replate9.jpg" alt=''/>
                    <div className="uses">
                        <h3>Donor Testimonial</h3>
                        <h4>Angela, former teacher</h4>
                        <p>"When you give to others, you get way more back than you ever imagined."</p>
                        <p>“I feel like I’m making a difference out there to benefit someone who really needs it.”</p>
                        <p>"It brings joy to my heart, when basic necessity like food is provided." </p>
                    </div>
                </div>
                <div className="testimonial">
                    <img src="assets/replate10.jpg" alt=''/>
                    <div className="uses">
                        <h3>Receiver Testimonial</h3>
                        <h4>Claudia, Mom</h4>
                        <p>"Thank you very much. I really appreciate your efforts on making life easier.</p>
                        <p>"Thank you for all your care and support through hard time."</p>
                        <p>"When you bless others, it always comes back to you. I just can’t tell you how much this means to me and our family."</p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <nav>
                    <a href="http://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a href="http://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="http://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                </nav>
            </footer>
        </div>
    )
};