import React from 'react';
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from 'react';

const CovarageMap = (props) => {
   const { isLoaded } = props;
   const [selectedMarker, setSelectedMarker] = useState("");

   const containerStyle = {
		width: "1700px",
		height: "600px",
   };

   const center = {
		lat: 23.8041,
		lng: 90.4152,
   };


   const markers = [
		{
			name: "location-1",
			location: {
				lat: 23.82235,
				lng: 90.365417,
			},
		},
		{
			name: "location-2",
			location: {
				lat: 23.738049,
				lng: 90.416328,
			},
		},
		{
			name: "location-3",
			location: {
				lat: 23.809591,
				lng: 90.367447,
			},
		},
		{
			name: "location-4",
			location: {
				lat: 23.733,
				lng: 90.417458,
			},
		},
   ];
   return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
			{markers.map((marker) => {
				return (
					<div key={marker.name}>
						<Marker
							position={marker.location}
							onClick={() => setSelectedMarker(marker)}
						/>
					</div>
				);
			})}

			{selectedMarker && (
				<InfoWindow position={selectedMarker.location}>
					<>
						<h1>location-{selectedMarker.name}</h1>
						<h1>status-{selectedMarker.status}</h1>
						<button onClick={() => setSelectedMarker("")}>
							close
						</button>
					</>
				</InfoWindow>
			)}
		</GoogleMap>
   ) : (
		<></>
   );
};

export default CovarageMap;