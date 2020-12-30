import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons' ;

library.add(fab); 

export default function Design(){
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
            <footer className="footer">
              <nav>
                  <a href="http://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} size='3x'/></a>
                  <a href="http://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "instagram"]} size='3x'/></a>
                  <a href="http://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} size='3x'/></a>
              </nav>
            </footer>
        </div>
    )
};