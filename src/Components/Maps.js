import '../Styles/Map.css';
import React from 'react';
import {withRouter} from 'react-router-dom';
import APIClient from '../apiClient';

import { Map, TileLayer, GeoJSON } from 'react-leaflet';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

class Maps extends React.Component {
    state = {
      lat: 42.241577,
      lng: -87.87302399999999,
      zoom: 10,
      shape: {},
      pins: {}
    }
    geoJsonShapeLayer = React.createRef()
    geoJsonPinsLayer = React.createRef()

    async componentDidMount() {
        const accessToken = "TEST"
        this.apiClient = new APIClient(accessToken);
        this.apiClient.getShape().then((data) => {
          this.geoJsonShapeLayer.current.leafletElement.clearLayers().addData(data)
          this.setState({...this.state, shape: data})
        });
        /*
        this.apiClient.getPins().then((data) => {
          this.geoJsonPinsLayer.current.leafletElement.clearLayers().addData(data)
          this.setState({...this.state, pins: data})
        });*/
    }
    geoJSONStyle() {
      return {
        color: '#1f2021',
        weight: 1,
        fillOpacity: 0.5,
        fillColor: '#fff2af',
      }
    }
    render() {
      const position = [this.state.lat, this.state.lng]
      return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            ref={this.geoJsonShapeLayer}
            data={this.state.shape.features}
            style={this.geoJSONStyle}
          />
          /*
          <GeoJSON
            ref={this.geoJsonPinsLayer}
            data={this.state.pins.features}
            style={this.geoJSONStyle}
          />*/
        </Map>
      )
    }
}

export default withRouter(Maps);
