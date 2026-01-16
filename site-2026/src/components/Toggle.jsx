import React from 'react';
import "/src/index.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
    };
  }

  toggleTheme = () => {
    // Toggle Tailwind dark mode on <html>
    document.documentElement.classList.toggle('dark');

    // Update state to switch icon emphasis
    this.setState(prev => ({
      isDark: !prev.isDark,
    }));
  };

  render() {
    const { isDark } = this.state;

    return (
      <section
        id="welcome"
        role="region"
        aria-label="my portfolio"
        className="h-[5em] bg-header-purple dark:bg-dark-header
                   text-medium-purple dark:text-skills-pink"
      >
        <div className="pt-10 mr-5 float-right flex items-center gap-3">
          <i
            className={`fa-solid fa-sun fa-xl transition-opacity duration-300
              ${isDark ?  'text-medium-purple' : 'text-skills-pink'}`}
            aria-hidden="true"
          ></i>

          {/* Toggle Button */}
          <button
            onClick={this.toggleTheme}
            aria-label="Toggle dark mode"
            className="focus:outline-none"
          >
            <i
              className={`fa-solid fa-xl transition-transform duration-300
                ${isDark ? 'fa-toggle-off' : 'fa-toggle-on'}`}
            ></i>
          </button>

          {/* Moon Icon (always visible, dimmed in light mode) */}
          <i
            className={`fa-solid fa-moon fa-xl transition-opacity duration-300
              ${isDark ? 'text-medium-purple' : 'text-skills-pink'}`}
            aria-hidden="true"
          ></i>

        </div>
      </section>
    );
  }
}

export default Toggle;
