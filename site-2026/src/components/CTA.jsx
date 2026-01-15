import React from 'react';

class Resume extends React.Component {
    render() {
        
        return (<><section id="resume" class="bg-blurple py-20" role="region" aria-label="my resume">
            <h2 className="font-header text-white text-3xl" >Let's Create Something Great!</h2>
            <div id="bagms" class="flex flex-row py-5 justify-center gap-4">
            <div className="flex items-center justify-center w-[10em] h-[2em] border-2 rounded-full font-header border-second-purple bg-light-purple text-second-purple hover:bg-second-purple hover:text-light-purple"><a className="no-underline hover:underline" href="mailto:malloryjoy13@gmail.com">Email</a></div>
            <div className="flex items-center justify-center w-[10em] h-[2em] border-2 rounded-full font-header border-second-purple bg-light-purple text-second-purple hover:bg-second-purple hover:text-light-purple"><a className="no-underline hover:underline" href="/assets/myResume.pdf">Resume</a></div>
            <div className="flex items-center justify-center w-[10em] h-[2em] border-2 rounded-full font-header border-second-purple bg-light-purple text-second-purple hover:bg-second-purple hover:text-light-purple"><a className="no-underline hover:underline" href="tel:5617970215">Phone</a></div>
            </div>
        </section>
              
        </>)
      }


}

export default Resume