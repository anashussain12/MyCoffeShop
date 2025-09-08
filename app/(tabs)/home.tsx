import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

import Categories from "../Components/Categories";
import Offer from "../Components/Offer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Navbar() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
    <ScrollView className="bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white">
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/avatar.png")}
            className="w-10 h-10 rounded-full"
          />
        </TouchableOpacity>

        <Text
          style={{ fontFamily: "PlayfairDisplay_700Bold" }}
          className="text-xl text-amber-900"
        >
          Lahore, PK
        </Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <View className="px-4 py-2">
        <Text
          style={{ fontFamily: "Lato_400Regular" }}
          className="text-lg text-gray-600"
        >
          Good Morning
        </Text>
        <Text
          style={{ fontFamily: "PlayfairDisplay_700Bold" }}
          className="text-2xl text-amber-900 mt-1"
        >
          Find your perfect coffee
        </Text>
      </View>

      {/* Components */}
      <Categories />
      <Offer />
    </ScrollView>
    </SafeAreaView>
  );
}
