import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';

const App = () => {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' exact Component={HomePage}/>
            <Route path='/projects' Component={ProjectsPage}/>
            <Route path='/blog' Component={BlogPage}/>
          </Routes>
        </Router>
      </>
    );
}

export default App;
