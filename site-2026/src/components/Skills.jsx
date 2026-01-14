import React from 'react';


class Expertise extends React.Component {
    render() {
        
        return (<><section id="skills" className="bg-skills-pink text-medium-purple py-20 flex flex-col items-center justify-center" role="region" aria-label="Areas of Expertise">
            <h2 className="color-medium-purple font-header text-3xl py-4">Skills and Stacks</h2>
            <div id="skills" className="md:grid grid-cols-4 gap-2 sm:grid grid-cols-2 gap-4">
            <img id="defaultimage" src="/src/assets/html.png" alt="Mallory Joy face" />
            <img id="defaultimage" src="/src/assets/css.png" alt="Mallory Joy face" />
            <img id="defaultimage" src="/src/assets/javascript.png" alt="Mallory Joy face" />
            <img id="defaultimage" src="/src/assets/react.png" alt="Mallory Joy face" />
              
            <img id="defaultimage" src="/src/assets/photoshop.png" alt="Mallory Joy face" />
            <img id="defaultimage" src="/src/assets/python.png" alt="Mallory Joy face" />
            <img id="defaultimage" src="/src/assets/figma.png" alt="Mallory Joy face" />
            <img id="defaultimage" src="/src/assets/tailwind.png" alt="Mallory Joy face" />
                
            </div>
 
 
 
 
        </section>
              
        </>)
      }


}

export default Expertise