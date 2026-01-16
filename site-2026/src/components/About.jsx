import React from 'react';
import '/src/index.css';

class About extends React.Component {
    render() {
        
        return (<><section id="aboutme" role="main" className="bg-header-purple dark:bg-dark-header">
          
          
            <div role="region" id="mystory" aria-label="about me" className="mx-60 py-15">
            <div className="static">
            <img className="rounded-xl w-md h-lg" id="defaultimage" src="/src/assets/myface.png" alt="Mallory Joy face" />
            <div className="absolute top-210 left-150 rounded-xl py-5 px-10 w-1/2 h-3/4 border-t-6 border-r-6 border-l-12 border-b-12 bg-bio-purple border-medium-purple dark:bg-dark-header dark:border-dark-border">
            <h2 className="font-header text-left  text-3xl my-5 text-medium-purple dark:text-skills-pink" aria-label="Hi! I'm Mallory.">Hi! I'm Mallory.</h2>
            <p className="font-body font-bold text-md text-left text-medium-purple dark:text-skills-pink">I am a front-end developer based out of the east coast of the United States. 
                The beginning of my career can be traced back to my early teens, as every ‘cool kid’ started creating 
                profiles on myspace. I would rapid fire choose theme after theme for my own profile, while sitting in awe 
                at those who knew how to manipulate the HTML and CSS of a theme to make it their own. As the social media 
                industry boomed, so did my interest in web design and software engineering. <br />
                Outside of the world wide web, I like movies (horror!), music (indie!), and traveling (everywhere!). As 
                you read this, I am probably scribbling away in a journal, reading a book, or playing piano. Ask me about 
                my favorite sitcom, and tell me yours. <br />
                In short, I love a good story and a great adventure. Ready to leave the Shire? </p>
            </div>
            </div>
            </div>
           
           
        </section>
              
        </>)
      }


}

export default About