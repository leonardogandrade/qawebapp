import React,{Component} from 'react';
import api from '../../services/api';
import {Map,TileLayer,Tooltip,Marker} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './index.css'
import L from 'leaflet';


const iconBlue = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-10, -90] // point from which the popup should open relative to the iconAnchor
});

const iconRed = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-10, -90] // point from which the popup should open relative to the iconAnchor
});

const iconOrange = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-10, -90] // point from which the popup should open relative to the iconAnchor
});


export default class MapWeb extends Component{
    state = {
        zoom: 5,
        centerMap : [-20.2,-40.2],
        minZoom : 3,
        maxZoom : 18,
        data : []
      }

    async componentDidMount(){
        const response = await api.get('/');
        this.setState({data : response.data});
    }

    render(){
        return(
            <Map className="map" center={this.state.centerMap} zoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <MarkerClusterGroup>
                    {this.state.data.map(data =>{
                        if(data.diagnostic < 4.2){
                            return(
                            <Marker key={data._id} icon={iconBlue} position={[data.coords.lat,data.coords.lon]}>
                                <Tooltip>
                                    <span>{data.diagnostic}</span>
                                </Tooltip>
                            </Marker>
                            )
                        }else if(data.diagnostic > 6){
                            return(
                                <Marker key={data._id} icon={iconRed} position={[data.coords.lat,data.coords.lon]}>
                                <Tooltip>
                                    <span>{data.diagnostic}</span>
                                </Tooltip>
                            </Marker>
                            )
                        }
                    })}                    
                </MarkerClusterGroup>
            </Map>
        )
    }
}

/* <Map className="map" center={this.state.centerMap} zoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}>
<TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
{this.state.data.map(data =>(
    <MarkerClusterGroup key={data._id}>
        <Marker 
            position={[data.coords.lat,data.coords.lon]}
            icon={iconBlue}>
        </Marker>
    </MarkerClusterGroup>
))}
</Map> */