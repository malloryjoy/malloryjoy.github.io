import React from 'react';

class Projects extends React.Component {
    render() {
        
        return (<><section id="projects" role="region" aria-label="Sample Work" className="flex flex-col items-center justify-center px-4 bg-bio-purple py-20">
            <h2 className="text-medium-purple pt-5 pb-15 text-3xl font-header">Sample Work</h2>
            <div className="flex flex-row gap-4">
            <div className="w-[20em] h-[28em] bg-light-purple rounded-[20px] border-t-2 border-r-2 border-l-10
            border-b-10 border-blurple">
                <h2 className="font-header text-blurple text-xl pb-5 pt-5">Providence Golf Club</h2>
                <img className="rounded-xl max-w-65 mx-5 mb-5 shadow-[-5px_5px_0_#4a02ae]" src="/src/assets/providencegolf.png"></img>
                <p className="font-body text-left px-5">Website built for Orlando based golf club. This site details the club’s amenities and offers online tee time booking. <br /><b>
                    <span className="text-sm">Built with: Wordpress CMS | HTML | CSS | PHP | Component Based Library </span></b>
                </p>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 mr-2 float-right hover:bg-darkest-purple"><a className="no-underline hover:underline" href="https://www.providence-golf.com/" aria-label="View Website (opens in a new tab)" target="_blank">View Website</a></div>

            </div>
            <div className="w-[20em] h-[28em] bg-light-purple rounded-[20px] border-t-2 border-r-2 border-l-10
            border-b-10 border-blurple">
                <h2 className="font-header text-blurple text-xl pb-5 pt-5">Seaview Golf Club</h2>
                <img className="rounded-xl max-w-65 mx-5 mb-5 shadow-[-5px_5px_0_#4a02ae]" src="/src/assets/SeaviewGolf.png"></img>
                <p className="font-body text-left px-5"> Website built for luxury golf course in New Jersey, known for sprawling landscape and events hosting. <br /><br /><b>
                    <span className="text-sm">Built with: Wordpress CMS | HTML | CSS | PHP | Component Based Library </span></b>
                </p>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 mr-2 float-right hover:bg-darkest-purple"><a className="no-underline hover:underline" href="https://www.seaviewgolf.com/" aria-label="View Website (opens in a new tab)" target="_blank">View Website</a></div>

            </div>
            <div className="w-[20em] h-[28em] bg-light-purple rounded-[20px] border-t-2 border-r-2 border-l-10
            border-b-10 border-blurple">
                <h2 className="font-header text-blurple text-xl pb-5 pt-5">GolfNow Template Library</h2>
                <img className="rounded-xl max-w-65 mx-5 mb-5 shadow-[-5px_5px_0_#4a02ae]" src="/src/assets/GolfNowTemplateLibrary.png"></img>
                <p className="font-body text-left px-5">Project completed from scope-to-launch detailing available designs and specifications for GolfNow clients.<br /><b>
                    <span className="text-sm">Built with: Figma | Wordpress CMS | HTML | CSS | Component Based Library </span></b>
                </p>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 mr-2 float-right bg-darkest-purple; hover:bg-darkest-purple"><a className="no-underline hover:underline" href="https://golfnowbusiness.com/template-library/" aria-label="View Website" target="_blank">View Website</a></div>

            </div>
            </div>
            <br />
            <div className="flex flex-row gap-4">
            <div className="w-[20em] h-[28em] bg-light-purple rounded-[20px] border-t-2 border-r-2 border-l-10
            border-b-10 border-blurple">
                <h2 className="font-header text-blurple text-xl pb-5 pt-5">Charcuterie Board Generator</h2>
                <img className="rounded-xl max-w-65 mx-5 mb-5 shadow-[-5px_5px_0_#4a02ae]" src="/src/assets/charcuteriegenerator.png"></img>
                <p className="font-body text-left px-5">Create a charcuterie board based on the cheese you have in your fridge! 
                    Uses Native JS as well as related frameworks.<br /><b>
                    <span className="text-sm">Built with: HTML | CSS | JS | Figma | Node Package Manager</span></b>
                </p>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 ml-2 float-left hover:bg-darkest-purple" ><a className="no-underline hover:underline"  href="https://github.com/malloryjoy/charcuterie" aria-label="View Demo" target="_blank">View GitHub</a></div>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 mr-2 float-right hover:bg-darkest-purple"><a className="no-underline hover:underline"  href="https://www.malloryjoy.dev/charcuterie" aria-label="View Demo" target="_blank">View Demo</a></div>

            </div>
            <div className="w-[20em] h-[28em] bg-light-purple rounded-[20px] border-t-2 border-r-2 border-l-10
            border-b-10 border-blurple">
                <h2 className="font-header text-blurple text-xl pb-5 pt-5">Movie Night Selector</h2>
                <img className="rounded-xl max-w-65 mx-5 mb-5 shadow-[-5px_5px_0_#4a02ae]" src="/src/assets/moviegenerator.png"></img>
                <p className="font-body text-left px-5">Perfect for a girls’ night, when you can’t decide what classic to pull up with some popcorn.<br /><br /><b>
                    <span className="text-sm">Built with: HTML | CSS | React | Tailwind | Vite | Node Package Manager </span></b>
                </p>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 ml-2 float-left hover:bg-darkest-purple"><a className="no-underline hover:underline"  href="https://github.com/malloryjoy/movie-generator" aria-label="View Demo" target="_blank">View GitHub</a></div>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 mr-2 float-right hover:bg-darkest-purple"><a className="no-underline hover:underline"  href="https://malloryjoy.dev/movie-generator/" aria-label="View Website">View Demo</a></div>

            </div>
            <div className="w-[20em] h-[28em] bg-light-purple rounded-[20px] border-t-2 border-r-2 border-l-10
            border-b-10 border-blurple">
                <h2 className="font-header text-blurple text-xl pb-5 pt-5">Imagi Charms</h2>
                <img className="rounded-xl max-w-65 mx-5 mb-5 shadow-[-5px_5px_0_#4a02ae]" src="/src/assets/ImagiLabs.png"></img>
                <p className="font-body text-left px-5">Creating animations with Python based code for a Bluetooth keychain!<br /><br /><b>
                    <span className="text-sm">Built with: HTML | CSS | JS | Python </span></b><br /><br /><br />
                </p>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 ml-2 float-left hover:bg-darkest-purple"><a className="no-underline hover:underline"  href="https://github.com/malloryjoy/imagiLabs" aria-label="View Demo" target="_blank">View GitHub</a></div>
                <div className="flex items-center justify-center w-[8em] h-[2em] border-2 border-darkest-purple bg-medium-purple
                 text-white font-header rounded-full mt-5 mr-2 float-right hover:bg-darkest-purple"><a className="no-underline hover:underline"  href="https://malloryjoy.dev/imagiLabs/" aria-label="View Website">View Demo</a></div>

            </div>
            </div>
            

            </section>
        </>)
      }


}

export default Projects




