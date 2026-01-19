import React from 'react';


class Resume extends React.Component {
    render() {
        
        return (<><section id="contact" className="py-20 bg-blurple dark:bg-dark-body" role="region" aria-label="my resume">
            <h2 className="font-header text-white text-3xl" >Let's Create Something Great Together!</h2>
            <div id="bagms" class="flex flex-row py-5 justify-center gap-4">
            <iframe src="https://forms.gle/NfVNrnsVyAznxRQY9" className="rounded-[20px] pt-10 mx-5 w-200 h-[25em] md:w-[70em] md:h-[40em]"></iframe>
            </div>
        </section>
              
        </>)
      }


}

export default Resume


