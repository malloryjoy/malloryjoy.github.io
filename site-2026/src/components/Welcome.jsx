import React from 'react';
import Nav from './Nav';
import '/src/index.css';
class Welcome extends React.Component {

    render() {
        
        return (<><section id="welcome" role="region" aria-label="my portfolio" className="bg-light-purple" >
            <Nav />


            <div id="hd-lspcmn" className="pt-36"></div>
           <div aria-labelledby="Mallory Joy">
           <h1 className="font-header text-dark-purple text-6xl">MALLORY JOY</h1>
           <div className="mt-12 pb-22 mb-22 text-medium-purple text-4xl">
            <a href="https://wwww.instagram.com/malloryjoycreates"><i class="fa-brands fa-instagram"></i></a>
            <a className="mx-4" href="https://wwww.github.com/malloryjoy"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/malloryjoy/"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
           <div className="mb-22 font-header text-xl text-dark-purple"><p>Creating Magic, One Design at a Time</p></div>
           <div className="mt-20 pb-22 font-extrabold text-3xl text-dark-purple"><p><a aria-label="Scroll down to about me section" href="#aboutme"><i class="fa-solid fa-chevron-down"></i></a></p></div>
       </div>
        </section>
              
        </>)
      }

}

export default Welcome

