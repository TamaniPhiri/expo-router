import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link style={{color:"white"}} href={"/(modals)/booking"}>Book</Link>
      <Link style={{color:"white"}} href={"/(modals)/login"}>Login</Link>
      <Link style={{color:"white"}} href={"/listing/123"}>Listing</Link>
    </View>
  )
}

export default Page