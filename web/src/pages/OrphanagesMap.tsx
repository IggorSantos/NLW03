import React from 'react'
import LogoMapMarker from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={LogoMapMarker} alt="Marcador" />
          <h2>Escolha um orfanato para visitar</h2>
          <p>Muitas crianças estão esperando sua visita</p>

        </header>
        <footer>
          <strong>Irecê</strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <Map
        center={[-11.3082368,-41.8545664]}
        zoom={15}
        style={{ width:'100%', height:'100%'}}
      >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>

    </div>
  )
}

export default OrphanagesMap;
