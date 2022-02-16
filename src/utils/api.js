import axios from 'axios';

const newRoomEndpoint =`https://api.daily.co/v1/rooms/`;

async function createRoom() {
  if(!process.env.REACT_APP_DAILY_CO_API_KEY) alert('The daily.co api key is not provided');

  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_DAILY_CO_API_KEY}`
  }
  const options = {
    properties: {
      exp: exp,
    },
  };
  axios.defaults.headers.Authorization = `Bearer ${process.env.REACT_APP_DAILY_CO_API_KEY}`;
  return await axios.post(newRoomEndpoint, options)
    .then(({ data }) => {
        return data;
    })
    .catch((error) => {
        console.log("acxios error :", error);
    })
}

export default { createRoom };