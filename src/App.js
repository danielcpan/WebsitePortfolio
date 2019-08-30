import React from 'react';

import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Terminal />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;