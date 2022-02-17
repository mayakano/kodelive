import "./App.css";
import React, { useEffect, useState, useCallback } from 'react';
import Live from "./components/Live";
//importing the dummy data from our filtertag file
import items from './components/filtertag';
import Menu from './components/Menu';
import Button from './components/Button';
import Navbar from "./components/Navbar";

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
          <Navbar />
          {/* passing the dummy data as a prop so we can access it in the Menu component */}
          <Button button={buttons} filter={filter}/>
          <Menu menuItem={menuItem} />
          <Live />
    </div>
  )
}

export default App;
