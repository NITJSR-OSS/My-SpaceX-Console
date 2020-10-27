// import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../css/launchPad.css'
import { useQuery } from 'react-query';
import {getLaunchPadMap} from '../api/LaunchPadMap'


import React from 'react'

export default function LaunchpadMap() {

    // const [state, setState] = useState({
    //         lat: 51.505,
    //         lng: -0.09,
    //         zoom: 13,
    //       }
    //     );
    
    const { isLoading, isError, data }=useQuery('LaunchPadMap',getLaunchPadMap);
    console.log(data);
    // const [position, setPosition] = useState([51.505,-0.09])
    //  setPosition([state.lat, state.lng]) ;
        return (
         <>
            {isLoading && 
                <div className="loading-box">
                    <div className="loading-conponents loading1"></div>
                    <div className="loading-conponents loading2"></div>
                    <div className="loading-conponents loading3"></div>
                    

                </div>
             }
             {!isLoading&& !isError &&


                  <Map center={[data[0].latitude, 8.0817]} zoom={2}>
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {data.map(pad=>(
                        <Marker key={pad.id} position={[pad.latitude,pad.longitude]}>
                              <Popup>
                      <h3>{pad.name} <span className={pad.status==='retired'?'red':'green'}>{pad.status}</span>
                       </h3>
                        <b>Locality:</b>{pad.locality}<br/>
                        <b>Region:</b>{pad.region}<br/>
                        <b>Launch Attempts:</b>{pad.launch_attempts}<br/>
                        <b>Launch Success:</b>{pad.launch_successes}<br/>
                      </Popup>
                       </Marker>
                    ))}



                    {/* <Marker position={[data[0].latitude,data[0].longitude]}>
                      <Popup>
             <h3>{data[0].name} <span className={data[0].status=='retired'?'red':'green'}>{data[0].status}</span>
             </h3>
                        <b>Locality:</b>{data[0].locality}<br/>
                        <b>Region:</b>{data[0].region}<br/>
                        <b>Launch Attempts:</b>{data[0].launch_attempts}<br/>
                        <b>Launch Success:</b>{data[0].launch_successes}<br/>
                      </Popup>
                    </Marker> */}
                  </Map>}

                  </>
                )
}


// export default class LaunchpadMap extends Component{

//     const { isLoading, isError, data, error }=useQuery('LatestLaunches',getLatestLaunches);

//   state = {
//     lat: 51.505,
//     lng: -0.09,
//     zoom: 13,
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }
