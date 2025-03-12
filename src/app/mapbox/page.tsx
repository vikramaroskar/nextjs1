"use client"

import * as React from 'react';
import { Layer, Map, Marker, Source } from 'react-map-gl/mapbox';

import type { FillLayer } from 'mapbox-gl';

// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import { features } from 'process';

const geoJsonExample = {
    type: 'featureCollection',
    id: 0,
    features: [
        {
            type: 'Feature',

        }
    ]

}


const parkLayer: FillLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
        'fill-color': '#4E3FC8'
    }
};

export default function Mapbox() {
    return (
        <div>
            <Map
                mapboxAccessToken="pk.eyJ1IjoidmlrYm9tIiwiYSI6ImNtODRyNnUzcTB6MGEyaXNhMmk0OWtoZjkifQ.x1N-mtEL_z25k1m8ddLN-g"
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{ width: '90vw', height: '75vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >


                <Layer {...parkLayer} />

                {/* <Marker key="firstmarker" longitude={-122} latitude={35} color="red">

                </Marker> */}

            </Map>
        </div>
    );
}