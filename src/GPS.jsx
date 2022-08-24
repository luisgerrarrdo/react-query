import { Text } from '@mantine/core';
import { useQuery } from 'react-query';

const getGPSCoordinates = async () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });

const GPS = () => {
  const { data: gps } = useQuery('gps', getGPSCoordinates);

  return <Text>{JSON.stringify(gps)}</Text>;
};

export default GPS;
