import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' exact Component={HomePage}/>
            <Route path='/projects' Component={ProjectsPage}/>
          </Routes>
        </Router>
      </>
    );
}

export default App;
