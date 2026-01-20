import React from 'react';
import '/src/index.css';

class About extends React.Component {
    render() {
        
        return (<><section id="aboutme" role="main" className="bg-header-purple dark:bg-dark-header">
          
          
            <div role="region" id="mystory" aria-label="about me" className="mx-[5em] lg:mx-[20em] py-15">
            <div className="flex flex-col md:flex-row">
            <img className="rounded-xl w-[27em] h-[35em] md:min-w-[25em] md:min-h-[30em]" id="defaultimage" src="/src/assets/myface.png" alt="Mallory Joy face" />
            <div className="my-10 -mx-5 rounded-xl py-5 px-5 border-t-6 
            border-r-6 border-l-12 border-b-12 bg-bio-purple border-medium-purple dark:bg-dark-header
             dark:border-dark-border w-[32em] h-[35em] md:min-w-[30em] md:-mx-[5em]">
            <h2 className="flex initial font-header text-left  text-3xl my-5 text-medium-purple dark:text-skills-pink" aria-label="Hi! I'm Mallory.">Hi! I'm Mallory. <img src="/src/assets/bubble1.gif" className="block h-[2em] w-[7em] ml-[.5em] -mt-[1em] dark:hidden"></img><img src="/src/assets/sparkle1.gif" className="hidden h-[3em] w-[7.5em] ml-[.25em] -mt-[1em] dark:block"></img></h2>
            <p className="flex initial font-body font-bold text-left text-medium-purple dark:text-skills-pink dark:-mt-5">I am a front-end developer based out of the east coast of the United States. 
                The beginning of my career can be traced back to my early teens, as every ‘cool kid’ started creating 
                profiles on myspace. I would rapid fire choose theme after theme for my own profile, while sitting in awe 
                at those who knew how to manipulate the HTML and CSS of a theme to make it their own. As the social media 
                industry boomed, so did my interest in web design and software engineering. <br />
                Outside of the world wide web, I like movies (horror!), music (indie!), and traveling (everywhere!). As 
                you read this, I am probably scribbling away in a journal, reading a book, or playing piano. Ask me about 
                my favorite sitcom, and tell me yours. <br /><br />
                In short, I love a good story and a great adventure. Ready to leave the Shire? </p>
            </div>
            </div>
            </div>
           
           
        </section>
              
        </>)
      }


}

export default About