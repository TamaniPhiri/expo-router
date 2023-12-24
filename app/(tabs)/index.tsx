import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";
import listingsData from "../../assets/data/airbnb-listings.json";

const Page = () => {
  const [category, setCategory] = useState<string>("Tiny homes");
  const items = useMemo(() => listingsData as any, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChange={onDataChanged} />,
        }}
      />
      <Listings listings={[]} category={category} />
    </View>
  );
};

export default Page;
