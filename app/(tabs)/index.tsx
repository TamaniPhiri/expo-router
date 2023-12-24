import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";

const Page = () => {
  const [category, setCategory] = useState<string>("Tiny homes");
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
      <Listings />
    </View>
  );
};

export default Page;
