import "./App.css";
import React, { useEffect, useState, useCallback } from 'react';
import Live from "./components/Live";
//importing the dummy data from our filtertag file
import items from './components/filtertag'; 
import Menu from './components/Menu';
import Button from './components/Button';
import Navbar from "./components/Navbar";

//will give us all the categories that are in the array, using spread operator to get all the data for the categories
//Set will give us the unique values only, will eliminate all repeating data
const allFilters = ['All', ...new Set(items.map(item => item.category))]
const allFilters2 = [...new Set(items.map(item => item.category))]


function App() {
  //creating two state values
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allFilters);
  const [buttons2, setButtons2] = useState(allFilters2);
  
  const isSelected = (allFilters2) => {
    allFilters2.addEventListener("click", onSelect);
  }

  const onSelect = () => {
    console.log('its been clicked');
  }

  
  //creating a new function that takes the button parameter. For the 'All' button, all the items will display
  const filter = (button) => {

    if(button === 'All') {
      setMenuItem(items);
      return;
    }

  //filtering the category of the data & saving to the button. The result of this function is that whatever 
  //will be filtered will end up in setMenuItem
  //item categories will create the names for each button. 
  //only way we can access each item from our data is by calling it in a function. once we do that we filter based on category,
  //which gets created as a new button. eg: const filteredData = items.filter('Tips'). This example function will then filter
  //all the items that have that category.
    const filteredData = items.filter(item => item.category === button)
    setMenuItem(filteredData)
  }




  return (
    <div>
          <Navbar />
          {/* passing the filter function as a prop so we can access it in the Button component */}
          <Button button={buttons} filter={filter}/>
          {/* passing the dummy data as a prop so we can access it in the Menu component */}
          <Menu menuItem={menuItem} />
          <Live list={buttons2}/>
    </div>
  )
}
export default App;