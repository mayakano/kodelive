import React from 'react'

function Menu({menuItem}) {
    return (
        //will map the menu item so we can display the data & give it a key(id) since it's a list
        <div className="flex items-stretch overflow-hidden shadow-lg">
            {
                menuItem.map((item) => {
                    return (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" key={item.id}>
                        <div className="item-container">
                        <div className="px-6 py-4">
                            <img className="w-32 h-32" src={item.image} alt="" />
                                <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                                <p className="text-gray-600 text-base">{item.description}</p>
                            </div>
                        </div>
                    </div> 
                    )
                })
            }
        </div>
    );
}

export default Menu;