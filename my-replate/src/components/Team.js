import React from 'react';

export default function Team(){
    return(
        <div>
            <div className="topcontent">
                <h1 id='h11'> What do we do at Replate</h1>
                <p>Each and every restaurant meal produces half a pound of food waste. All that adds up to 11.4 million tons—and $25 billion—of food waste each year just from U.S. restaurants, says a recent report by the nonprofit ReFED. So what do restaurants do with leftover food? 
                We give the leftover food to people in need of it, to homeless shelters, orphanages, senior homes etc.</p>
            </div>
            <section className="content">
                <div className="text">
                    <h2 className='h12'>Volunteers</h2>
                    <p>These superheroes are ordinary people with hearts for giving and helping others. They dedicate their time and effort to local causes they're passionate about, positively impacting the lives of others in their communities. 
                        An opportunity to serve the community, it's a voluntary work, flexible timings. Nothing to lose, volunteering your time will have a big impact and will be rewarding in ways you never expected.</p>
                </div>
                <div className="image">
                    <img src="assets/replate3.jpeg" alt="Let's go on an adventure!" />
                </div>
            </section>
            <section className="inverse-content">
                <div className="image">
                    <img src="assets/replate2.jpeg" className="img-fluid rounded" alt="Lets have fun!" />
                </div>
                <div className="text">
                    <h2 className='h2'>Donors/Business</h2>
                    <p>You see the importance of making small changes close to home to make your community a better place to live.
                        Your help feeds thousands of people and reduce wastage of food and resources. An opportunity to serve the
                        community and to distribute the leftover food.</p>
                </div>
            </section>
            <footer>
                <div id='footerDiv'>
                    <p id='footerP'>
                        Replate Co.<br/>
                        555 Mission St.,<br/>
                        San Francisco, CA 94100<br/>
                        E-mail: help@replate.co<br/>
                        Phone: (415)555-1234<br/>
                    </p>
                </div>
            </footer>
        </div>
    )
};