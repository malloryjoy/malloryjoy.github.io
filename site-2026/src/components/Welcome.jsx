import React from 'react';
import Nav from './Nav';
import Toggle from './Toggle';
import '/src/index.css';
class Welcome extends React.Component {

    render() {
        
        return (<><section id="welcome" role="region" aria-label="my portfolio" className="bg-light-purple dark:bg-dark-body" >
            <Toggle />
            <Nav />
            <div id="hd-lspcmn" className="pt-20"></div>
           <div aria-labelledby="Mallory Joy">
           <h1 className="font-header text-6xl text-dark-purple dark:text-skills-pink">MALLORY JOY</h1>
           <div className="mt-5 pb-20 text-4xl text-medium-purple dark:text-skills-pink">
            <a href="https://wwww.instagram.com/malloryjoycreates"><i class="fa-brands fa-instagram"></i></a>
            <a className="mx-4" href="https://wwww.github.com/malloryjoy"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/malloryjoy/"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div className="pb-20 font-extrabold text-3xl text-dark-purple dark:text-skills-pink"><p><a aria-label="Scroll down to about me section" href="#aboutme"><i class="fa-solid fa-chevron-down"></i></a></p></div>
           <div className="pb-20 font-header text-xl text-dark-purple dark:text-skills-pink"><p>Creating Magic, One Design at a Time</p></div>
           
       </div>
        </section>
              
        </>)
      }

}

export default Welcome

