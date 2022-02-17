import "./App.css";
import React, { useEffect, useState, useCallback } from 'react';
import Live from "./components/Live";
//importing the dummy data from our filtertag file
import items from './filtertag';
import Menu from './components/Menu';
import Button from './components/Button';

const allFilters = ['All', ...new Set(items.map(item => item.category))]

function App() {
  //creating two state values
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allFilters);
  //creating a new function that takes the button parameter
  const filter = (button) => {

    if(button === 'All') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category === button)
    setMenuItem(filteredData)
  }

  return (
    <div>
          <img className="app-logo" alt="Logo" src="./Kodelive.png" />          
          <div className="App">
            <div className="title">
              <h1>
                
                <span>Filter by programming language</span>
              </h1>
            </div>
          </div>
          {/* passing the dummy data as a prop so we can access it in the Menu component */}
          <Menu menuItem={menuItem} />
          <Button button={buttons} filter={filter}/>
          <Live></Live>
    </div>
  )
}

export default App;
