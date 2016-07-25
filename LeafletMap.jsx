import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CenterFocus from 'material-ui/svg-icons/image/filter-center-focus';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import ZoomOut from 'material-ui/svg-icons/action/zoom-out';


class LeafletMap extends Component {

    constructor() {
        super();
        this.state = {
            animate: true,
            center: [
                -34.989610443115,
                -71.232476234436
            ],
            zoom: 13,
            zoomControl: false
        };
        //this.zoomIn = () => this.setState({zoom: this.state.zoom+1});
        //this.zoomOut = () => this.setState({zoom: this.state.zoom-1});
    }


    bindMap(element) {
        this.map = element.leafletElement;
    }

    ZoomIn = () => this.map.zoomIn();
    ZoomOut = () => this.map.zoomOut();
    SetView = () => this.map.setView(this.state.center, this.state.zoom);

    render() {
        return (
            <div>
                <Map
                    animate={this.state.animate} 
                    center={this.state.center} 
                    zoom={this.state.zoom} 
                    zoomControl={this.state.zoomControl}
                    ref={::this.bindMap}
                    >
                    <TileLayer
                        url={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}
                        attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'}
                    />
                    <Control position="topleft">
                        <MuiThemeProvider>
                            <div>
                                <div>&nbsp;</div>
                                <FloatingActionButton mini={true}>
                                    <ZoomIn onClick={() => this.ZoomIn()} />
                                </FloatingActionButton>
                                <div>&nbsp;</div>
                                <FloatingActionButton mini={true}>
                                    <ZoomOut onClick={() => this.ZoomOut()}/>
                                </FloatingActionButton>
                                <div>&nbsp;</div>
                                <FloatingActionButton mini={true}>
                                    <CenterFocus onClick={() => this.SetView()}/>
                                </FloatingActionButton>
                            </div>
                        </MuiThemeProvider>
                    </Control>
                </Map>
            </div>
        );
    }
}
export default LeafletMap;

