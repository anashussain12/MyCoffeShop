import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import ProductCard from "./ProductCard";

type IconName = keyof typeof Ionicons.glyphMap;

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Load fonts
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const categories: { name: string; icon: IconName }[] = [
    { name: "All", icon: "grid-outline" },
    { name: "Cappuccino", icon: "cafe-outline" },
    { name: "Coffee", icon: "cafe" },
    { name: "Espresso", icon: "cafe" },
    { name: "Cold Brew", icon: "snow-outline" },
    { name: "Latte", icon: "cafe-outline" },
    { name: "Mocha", icon: "cafe-outline" },
  ];

  const coffeeCards = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$9.99",
      image: require("../../assets/images/cappuccino.png"),
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
      image: require("../../assets/images/cappuccino.png"),
    },
  ];

  // ✅ Combined filter for search + category
  const filteredCards = coffeeCards.filter((card) => {
    const matchesCategory =
      activeCategory === "All" || card.name === activeCategory;
    const matchesSearch = card.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View className="bg-white">
      {/* Search Bar */}
      <TextInput
        placeholder="Search coffee..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="p-3 mx-5 my-3 py-4 rounded-full bg-gray-100"
        placeholderTextColor="#adabab"
        style={{ fontFamily: "Lato_400Regular" }}
      />

      {/* Categories Title */}
      <Text
        className="px-5 py-3 text-3xl text-black"
        style={{ fontFamily: "PlayfairDisplay_700Bold" }}
      >
        Categories
      </Text>

      {/* Category Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, gap: 8 }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            onPress={() => setActiveCategory(category.name)}
            className={`flex-row items-center border px-3 py-2 rounded-full ${
              activeCategory === category.name ? "bg-[#78350F]" : "bg-gray-200"
            }`}
          >
            <Ionicons
              name={category.icon}
              size={18}
              color={activeCategory === category.name ? "#fff" : "#000"}
              style={{ marginRight: 6 }}
            />
            <Text
              className="text-sm font-semibold"
              style={{
                fontFamily: "Lato_400Regular",
                color: activeCategory === category.name ? "#fff" : "#000",
              }}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Coffee Cards */}
      <View className="mt-5 mb-10">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              // <View
              //   key={card.id}
              //   className="bg-white border rounded-3xl mr-4 overflow-hidden"
              // >
              //   <Image source={card.image} />
              //   <View className="py-3 px-4">
              //     <Text
              //       className="text-lg"
              //       style={{ fontFamily: "PlayfairDisplay_700Bold" }}
              //     >
              //       {card.name}
              //     </Text>
              //     <Text
              //       className="text-base text-gray-600"
              //       style={{ fontFamily: "Lato_400Regular" }}
              //     >
              //       Price: {card.price}
              //     </Text>
              //   </View>
              // </View>
              <ProductCard key={card.id} product={card} />
            ))
          ) : (
            <Text
              className="px-5 text-gray-500"
              style={{ fontFamily: "Lato_400Regular" }}
            >
              No results found
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
