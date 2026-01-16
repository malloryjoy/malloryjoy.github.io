import React from 'react';


class Resume extends React.Component {
    render() {
        
        return (<><section id="resume" className="py-20 bg-blurple dark:bg-dark-body" role="region" aria-label="my resume">
            <h2 className="font-header text-white text-3xl" >Let's Create Something Great!</h2>
            <div id="bagms" class="flex flex-row py-5 justify-center gap-4">
            <iframe src="https://forms.gle/NfVNrnsVyAznxRQY9" width="800" height="450"></iframe>
            </div>
        </section>
              
        </>)
      }


}

export default Resume


