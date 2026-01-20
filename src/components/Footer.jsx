import React from 'react';

class Footer extends React.Component {
  
    render() {
      const year = new Date().getFullYear();
        return (<><section id="footer" class="text-xs font-header text-center pt-16 pb-8 bg-light-purple text-medium-purple dark:bg-dark-header dark:text-skills-pink">
            <p>Copyright {year} Mallory Joy. All Rights Reserved.</p>
            <p>Icons by <a className="underline" href="https://icons8.com/" aria-label="Icons8 (opens in a new tab)" target="_blank">Icons8</a>, <a className="underline" href="https://www.pinterest.com/maljoylove/portfolio-site-design/portfolio-gifs/" aria-label="Greeting Icons (opens in a new tab)" target="_blank">Pinterest</a>, <a className="underline" href="https://simpleicons.org/" aria-label="Simple Icons (opens in a new tab)" target="_blank">Simple Icons</a> | <a className="underline" href="https://github.com/malloryjoy/malloryjoy.github.io/tree/dev-vite" target="_blank" aria-label="GitHub link (opens in a new tab)">View Portfolio GitHub</a></p>
            </section>
              
        </>)
      }


}

export default Footer