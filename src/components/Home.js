import React from "react";

const Home = () => {

    const openChatRoom = () => {
        console.log(process.env)
        if(process.env.REACT_APP_DAILY_CO_API_KEY) {
            console.log(process.env.REACT_APP_DAILY_CO_API_KEY);
        } else {
            alert('The daily.co api key is not provided');
        }
    }

    return <div className="container">
        <button onClick={() => openChatRoom()}>Go Live</button>
    </div>
};

export default Home;