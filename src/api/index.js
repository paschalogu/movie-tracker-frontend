import axios from 'axios';



export const getPlacesData = async (type, sw, ne) => {
    try{
      const { data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            // withCredentials:true,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              // "Content-Type": 'text/plain',
              'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            }
          } );
        console.log(data);
        return data
    }
    catch (error) {
        console.log(error)
    }

}

export const getWeatherData = async (lat, lng) => {
  try {
    if(lat && lng) {
      const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/find',
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          'X-RapidAPI-Key': '6d1a142783msh1c96ac7d7ee3a99p1097e3jsne9e644eeca16',
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      console.log(data)
      return data;
    }
  
  }
  catch(error) {
    console.log(error)
  }
}






 //WORKING WAY

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//   params: {
//     bl_latitude: sw.lat,
//     tr_latitude: ne.lat,
//     bl_longitude: sw.lng,
//     tr_longitude: ne.lng,
//   },
//   headers: {
//     'X-RapidAPI-Key': '6d1a142783msh1c96ac7d7ee3a99p1097e3jsne9e644eeca16',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// const options = {
//   method: 'GET',
//   url: 'https://community-open-weather-map.p.rapidapi.com/find',
//   params: {
//     lat: lat,
//     lon: lng,
//   },
//   headers: {
//     'X-RapidAPI-Key': '6d1a142783msh1c96ac7d7ee3a99p1097e3jsne9e644eeca16',
//     'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
//   }
// };





//NOT WORKING WAY

// const { data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//             // withCredentials:true,
//             params: {
//               bl_latitude: sw.lat,
//               tr_latitude: ne.lat,
//               bl_longitude: sw.lng,
//               tr_longitude: ne.lng,
//             },
//             headers: {
//               // "Content-Type": 'text/plain',
//               'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
//               'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//             }
//           } );


// const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//         params: {
//         lat: lat,
//         lon: lng,
//         },
//         headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY,
//         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
//         }
//       });