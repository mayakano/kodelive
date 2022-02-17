import React from 'react'

function Button({button, filter}) {
  return (
    <div>
      <h3 className='font-medium leading-tight text-2xl mt-0 mb-2 text-white-600'>Filter by programming language</h3>
      {
        button.map((cat, i)=> {
          return <button className='px-4 mx-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' type="button" onClick={()=> filter(cat)}>{cat}</button>
        })
      }
    </div>
  )
}

export default Button; 
