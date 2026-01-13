import React from 'react';
import '/src/index.css';

class About extends React.Component {
    render() {
        
        return (<><section id="aboutme" role="main" className="bg-header-purple">
          
          
            <div role="region" id="mystory" aria-label="about me" className="mx-60 py-35 flex flex-row">
            <img class="rounded-xl w-1/3 h-2/3 z-0" id="defaultimage" src="/src/assets/myface.png" alt="Mallory Joy face" />
            <div className="bg-bio-purple z-10 rounded-xl py-5 px-15 w-350px h-320px border-t-6 border-r-6 border-l-12 border-b-12 border-medium-purple">
            <h2 class="font-header text-left text-medium-purple text-lg mt-5" aria-label="Hi! I'm Mallory.">Hi! I'm Mallory.</h2>
            <p class="font-body text-left">I am a front-end developer based out of the east coast of the United States. 
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
           
           
        </section>
              
        </>)
      }


}

export default About