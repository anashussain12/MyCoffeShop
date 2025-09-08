import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

type IconName = keyof typeof Ionicons.glyphMap;

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Cappuccino");

  // ✅ Load fonts
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const categories: { name: string; icon: IconName }[] = [
    { name: "Cappuccino", icon: "cafe-outline" },
    { name: "Coffee", icon: "cafe" },
    { name: "Expresso", icon: "cafe" },
    { name: "Cold Brew", icon: "snow-outline" },
    { name: "Latte", icon: "cafe-outline" },
    { name: "Mocha", icon: "cafe-outline" },
  ];

  const coffeeCards = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$9.99",
      image: require("../../assets/images/chaaa.png"),
    },
    {
      id: 2,
      name: "Espresso",
      price: "$9.99",
      image: require("../../assets/images/espresso.png"),
    },
    {
      id: 3,
      name: "Latte",
      price: "$8.99",
      image: require("../../assets/images/cappuccino.png"),
    },
    {
      id: 4,
      name: "Mocha",
      price: "$10.99",
      image: require("../../assets/images/chaaa.png"),
    },
  ];

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
    >
      {/* Title */}
      <Text
        className="px-5 text-xl text-black"
        style={{ fontFamily: "PlayfairDisplay_700Bold" }}
      >
        Special Offer
      </Text>

      {/* Horizontal Cards */}
      <View className="mt-5 mb-5">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {coffeeCards.map((card) => (
            <View
              key={card.id}
              className="bg-white border rounded-3xl mr-4 overflow-hidden"
            >
              <Image source={card.image} />
              <View className="py-3 px-4 flex justify-between">
                <Text
                  className="text-lg"
                  style={{ fontFamily: "PlayfairDisplay_700Bold" }}
                >
                  {card.name}
                </Text>
                <Text
                  className="text-base text-gray-600"
                  style={{ fontFamily: "Lato_400Regular" }}
                >
                  Price: {card.price}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Categories;
