import Mapbox, { MapView } from '@rnmapbox/maps';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        styleURL='mapbox://styles/mapbox/dark-v11'
      ></MapView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
