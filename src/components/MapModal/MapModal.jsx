import { MapModalStyle } from "./style"
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import { useEffect } from "react"

export function generateMap(){
    const position = [51.505, -0.09]
        
    render(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default function MapModal(){

// useEffect(() => {
//     generateMap(navigator.geolocation)
// }, [])

const position = [51.505, -0.09]

    return(

        <MapModalStyle>

        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
        
        </MapModalStyle>
    )

}