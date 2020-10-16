import React from 'react'
import LogoMapMarker from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus,FiArrowRight} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map,TileLayer,Marker,Popup} from 'react-leaflet'
import MapIcon from '../utils/mapIcon'

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
      <TileLayer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={MapIcon}
        position={[-11.3082368,-41.8545664]}
      >
        <Popup closeButton={false} maxWidth={240} minWidth={240} className="map-popup">
          Lar das Meninas
          <Link to="/orphanages/1">
            <FiArrowRight size={25} color="#FFF"/>
          </Link>
        </Popup>
      </Marker>
    </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>

    </div>
  )
}

export default OrphanagesMap;
