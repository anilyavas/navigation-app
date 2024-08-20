import axios from 'axios';

type Directions = {
  start: string;
  end: string;
};
export const getDirection = async ({ start, end }: Directions) => {
  const accessToken = process.env.EXPO_PUBLIC_MAPBOX_SECRET_KEY;
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${accessToken}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('Error while fetching data', error);
  }
};
