import React from 'react';
import '/src/index.css';
/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';
/* eslint-enable no-unused-vars */


class About extends React.Component {
    render() {
        
        return (<><section id="aboutme" role="main" className="bg-header-purple dark:bg-dark-header">
          
          
            <div role="region" id="mystory" aria-label="about me" className="mx-[5em] lg:mx-[20em] py-15">
            <div className="flex flex-col md:flex-row">
            <motion.img
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="block mx-auto rounded-xl w-full max-w-[27em] h-auto md:min-w-[30em] md:max-w-[30em]"
                                src="assets/myface.png"
                                alt="Mallory Joy face"
                            />

                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                                className="block mx-auto my-10 rounded-xl py-5 px-5 border-6
                                md:border-t-6 md:border-r-6 md:border-l-12 md:border-b-12
                                bg-bio-purple border-medium-purple dark:bg-dark-header
                                dark:border-dark-border w-full max-w-[20em] min-h-[38em] md:w-auto md:min-w-[30em] md:-mx-[5em]"
                            >
                                <h2 className="bg-[url(/assets/bubble1.gif)] dark:bg-[url(/assets/starlight_bg_1.gif)] bg-no-repeat bg-cover flex initial font-header text-left text-3xl my-5 text-medium-purple dark:text-skills-pink" aria-label="Hi! I'm Mallory.">Hi! I'm Mallory.</h2>
                                <p className="flex initial font-body font-bold text-left text-medium-purple dark:text-skills-pink">I am a front-end developer based out of the east coast of the United States.
                                    The beginning of my career can be traced back to my early teens, as every 'cool kid' started creating
                                    profiles on myspace. I would rapid fire choose theme after theme for my own profile, while sitting in awe
                                    at those who knew how to manipulate the HTML and CSS of a theme to make it their own. As the social media
                                    industry boomed, so did my interest in web design and software engineering. <br />
                                    Outside of the world wide web, I like movies (horror!), music (indie!), and traveling (everywhere!). As
                                    you read this, I am probably scribbling away in a journal, reading a book, or playing piano. Ask me about
                                    my favorite sitcom, and tell me yours. <br /><br />
                                    In short, I love a good story and a great adventure. Ready to leave the Shire? </p>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;