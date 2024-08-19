import Mapbox, { MapView } from '@rnmapbox/maps';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_SECRET_KEY || null);

export default function Map() {
  return (
    <MapView
      style={{ flex: 1 }}
      styleURL='mapbox://styles/mapbox/dark-v11'
    ></MapView>
  );
}
