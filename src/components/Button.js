import React from 'react'

function Button({button, filter}) {
  return (
    <div>
      <h3 className='font-medium leading-tight text-2xl mt-0 mb-2 text-white-600'>Looking for help? Filter by programming language</h3>
      {
        button.map((category, i)=> {
          return (
              <button className='
              px-4 mx-1.5 
              bg-blue-500 
              hover:bg-blue-700 
              text-white 
              font-bold 
              py-2 px-4 
              rounded-full' 
              type="button" 
              onClick={()=> filter(category)}>{category}</button>
        )})
      }
    </div>
  )
}

//displaying all the buttons (=== all the cateegories) that we have.
//(category, i) will retrieve each index of every category and will return what's in the JSX script
//onClick we are going to pass the filter function. It is going to return whatever paramter we have passed, in this case button, & return it's data

export default Button; 
