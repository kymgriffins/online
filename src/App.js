import './styles/App.css';
import './styles/bootstrap-grid.css';

import Intro from './sections/Intro'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Articles from './sections/Articles'
import OpenSource from './sections/OpenSource'

import CopyrightLabel from './components/CopyrightLabel'

import ProjectConfig from './data/ProjectConfig.json';

import ReactGA from 'react-ga4';

// Initialise Google analytics
const TRACKING_ID = "G-DQ8EZHH8ZY";
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <>
      <div className='container bg-primary-dark'>

        <Intro />

        {ProjectConfig.displaySections.project &&
          <Projects />
        }

        {ProjectConfig.displaySections.articles &&
          <Articles />
        }

        {ProjectConfig.displaySections.open_source &&
          <OpenSource />
        }

        <Contact />

        <CopyrightLabel />

      </div>
    </>
  );
}

export default App;
