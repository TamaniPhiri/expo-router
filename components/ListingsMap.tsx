import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import listingsDataGeo from "../assets/data/airbnb-listings.geo.json";
import AirbnbGeoListing from '../types/interface'

interface Props{
  listings:AirbnbGeoListing;
}
const ListingsMap = ({listings}:Props) => {
  console.log(listings.geolocation);
  
  return (
    <View>
      <Text>ListingsMap</Text>
    </View>
  )
}

export default ListingsMap