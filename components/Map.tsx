import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_SECRET_KEY || null);

export default function Map() {
  return (
    <MapView
      style={{ flex: 1 }}
      styleURL='mapbox://styles/mapbox/navigation-day-v1'
    >
      <LocationPuck
        pulsing={{ isEnabled: true }}
        puckBearingEnabled
        puckBearing='heading'
      />
      <Camera followZoomLevel={5} followUserLocation />
    </MapView>
  );
}
