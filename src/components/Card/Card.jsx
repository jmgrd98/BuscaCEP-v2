import { CardStyle } from "./style";
import {FaMapMarkedAlt} from 'react-icons/fa'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";

export default function Card({cep, uf, cidade, bairro, logradouro}){

const [position, setPosition] = useState([51.505, -0.09])
const [zoom, setZoom] = useState(13)
const [map, setMap] = useState(null)

useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    setPosition([lat, lon])
  })
}, []) // roda no 1o mount

useEffect(() => {
  if (map) {
    map.setView(position, zoom)
  }
}, [map, position, zoom])



    return(

        <CardStyle>

            <div className="cardContainer">
                <div className="cardHeader">
                <span>{cep}</span>
                </div>

                <div className="cardBody">
                <p>{cidade}/{uf}</p>
                <p>{bairro}</p>
                <p>{logradouro}</p>

                <button onClick={position}><FaMapMarkedAlt size={25}/></button>
                </div>

<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} ref={setMap} className='mapContainer'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      Você está aqui!
    </Popup>
  </Marker>
</MapContainer>
            </div>

            

        </CardStyle>
    )
}