import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import MoveList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MoveList}/>
      <Route path="/movie/:id" component={Movie}/>
    </div>
  );
};

export default App;
