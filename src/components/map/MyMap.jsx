// import React from 'react';
// import DeckGL from '@deck.gl/react';
// import {LineLayer} from '@deck.gl/layers';
// import {Map} from 'react-map-gl';

// //pk.eyJ1Ijoicm95Y2VtYXJ0aW4iLCJhIjoiY2wzODk0bmp3MDc4YjNpbnphNzRzODR1YSJ9.peCCwkWoX_RHseUf2WI1Xw

// const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoicm95Y2VtYXJ0aW4iLCJhIjoiY2wzODk0bmp3MDc4YjNpbnphNzRzODR1YSJ9.peCCwkWoX_RHseUf2WI1Xw';

// // Viewport settings
// const INITIAL_VIEW_STATE = {
//   longitude: -122.41669,
//   latitude: 37.7853,
//   zoom: 13,
//   pitch: 0,
//   bearing: 0
// };

// // Data to be used by the LineLayer
// const data = [
//   {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
// ];

// const MyMap = () => {
//     const layers = [
//         new LineLayer({id: 'line-layer', data})
//       ];
  
//     return (
//         <DeckGL
//         initialViewState={INITIAL_VIEW_STATE}
//         controller={true}
//         layers={layers}
//       >
//         <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
//       </DeckGL>
//   )
// }

// export default MyMap


import './MyMap.css'
import React from 'react'

const MyMap = () => {
  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.54926894047642!2d115.23017307475344!3d-8.616312410108655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23efd82a890a9%3A0x6c8e37fc2e983c77!2sJl.%20Cekomaria%2C%20Peguyangan%20Kangin%2C%20Kec.%20Denpasar%20Utara%2C%20Kota%20Denpasar%2C%20Bali%2080238!5e0!3m2!1sen!2sid!4v1665403626908!5m2!1sen!2sid" style={{border:"0"}} allowFullScreen={""} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default MyMap