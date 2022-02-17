// import React from "react";

// const Home = () => {

//     const openChatRoom = () => {
//         console.log(process.env)
//         if(process.env.REACT_APP_DAILY_CO_API_KEY) {
//             console.log(process.env.REACT_APP_DAILY_CO_API_KEY);
//         } else {
//             alert('The daily.co api key is not provided');
//         }
//     }

//     return <div className="container">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openChatRoom()}>Go Live</button>
//     </div>
// };

// export default Home;
import React, { useEffect, useState, useCallback } from 'react';
// import { roomUrlFromPageUrl } from "../utils/urlUtils";
import api from '../utils/api';
import DailyIframe from '@daily-co/daily-js';

const STATE_IDLE = 'STATE_IDLE';
const STATE_JOINING = 'STATE_JOINING';
const STATE_JOINED = 'STATE_JOINED';

const Live = ({list}) => {
    
  const [appState, setAppState] = useState(STATE_IDLE);
  const [roomUrl, setRoomUrl] = useState(null);
  const [callObject, setCallObject] = useState(null);
  const [clickable, setClickable] = useState(false);

  const optionSelected = (list) => {
 
  }
  
  const createCall = useCallback(() => {
    return api
      .createRoom()
      .then((room) => {
            console.log("api.createRoom room: ", room);
            window.open(room.url, '_blank')
            return room.url
        })
      .catch((error) => {
        console.log('Error creating room', error);
        setRoomUrl(null);
        setAppState(STATE_IDLE);
      });
  }, []);

  const startJoiningCall = useCallback((url) => {
      console.log("startJoiningCall url", url);
    const newCallObject = DailyIframe.createCallObject();
    setRoomUrl(url);
    setCallObject(newCallObject);
    setAppState(STATE_JOINING);
    newCallObject.join({ url });
  }, []);

  
//   useEffect(() => {
//     const url = roomUrlFromPageUrl();
//     url && startJoiningCall(url);
//   }, [startJoiningCall]);

//   useEffect(() => {
//     const pageUrl = pageUrlFromRoomUrl(roomUrl);
//     if (pageUrl === window.location.href) return;
//     window.history.replaceState(null, null, pageUrl);
//   }, [roomUrl]);

  useEffect(() => {
    if (!callObject) return;

    const events = ['joined-meeting', 'left-meeting', 'error'];

    function handleNewMeetingState(event) {
      event && console.log("Daily logEvent", event);
      if (callObject.meetingState() == 'joined-meeting') setAppState(STATE_JOINED);
    }

    // Use initial state
    handleNewMeetingState();

    // Listen for changes in state
    for (const event of events) {
      callObject.on(event, handleNewMeetingState);
    }

  }, [callObject]);


  return (
    
<div className='text-center'>
    <h3 className='font-medium leading-tight text-3xl mt-10 mb-2 text-white-700'>Looking to help out? <br />
    <span className='text-2xl'>Select your skills</span></h3>
      { 
        list.map((category, i)=> {
          return (
              <button className='
              place-self-center	
              place-items-center
              place-content-center	
              px-2 mx-1.5 
              bg-transparent 
              hover:bg-blue-700 
              text-white 
              font-bold 
              py-2 px-4 
              rounded-full' 
              type="button">{category}</button>
        )})
      }
    <span className='container'>
    {/* {optionSelected == true && */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded px-16 mt-6"
            onClick={() => {
              createCall().then((url) => startJoiningCall(url));
            }}
          >
            Go Live
          </button>
  {/* } */}
  </span>
</div>
  );
};

export default Live;

