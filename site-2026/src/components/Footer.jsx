import React from 'react';

class Footer extends React.Component {
  
    render() {
      const year = new Date().getFullYear();
        return (<><section id="footer" class="text-xs font-header bg-light-purple text-medium-purple text-center pt-16 pb-8" >
            <p>Copyright {year} Mallory Joy. All Rights Reserved.</p>
            <p>Icons by <a className="underline" href="https://icons8.com/">Icons8</a> | <a className="underline" href="https://github.com/malloryjoy" target="_blank" aria-label="GitHub link (opens in a new tab)">View GitHub</a></p>
            </section>
              
        </>)
      }


}

export default Footer