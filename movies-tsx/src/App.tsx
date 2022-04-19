import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/Navigationmenu';
import MovieList from './components/Moviesitemlist';
import { Routes } from 'react-router-dom';
import Navigationmenu from './components/Navigationmenu';
import Moviesitemlist from './components/Moviesitemlist';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path="/" element={<Navigationmenu/>}></Route>
        <Routes>
          <Route path="/:section" element={<Moviesitemlist/>}></Route>
          <Route path="/" render={
            () => {
              return (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                  Movies on the Tip is an aggregator of movies. 
                  Get details of all your favourite movies right here!
                </div>
              )
            }
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;