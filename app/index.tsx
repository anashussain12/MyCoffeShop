import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import {
  useFonts,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function GetStarted() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null; 
    // return null; 
    // return null; 
  }

  return (
    <ImageBackground
      source={require("../assets/images/back.png")}
      resizeMode="cover"
      className="flex-1 justify-center items-center bg-amber-200"
    >
      <View className="items-center px-6">
        <Image
          source={require("../assets/images/starter.png")}
          className="w-80 h-80 mb-4"
          resizeMode="contain"
        />
        <Text
          className="text-4xl text-center text-amber-900"
          style={{ fontFamily: "PlayfairDisplay_700Bold" }}
        >
          Anas Coffee Waala
        </Text>
        <Text
          className="text-gray-800 mt-3 text-lg text-center"
          style={{ fontFamily: "Lato_400Regular" }}
        >
          “Awaken your senses, one cup at a time.”
        </Text>
        <Text
          className="text-gray-600 mt-2 text-center px-6"
          style={{ fontFamily: "Lato_400Regular" }}
        >
          From classic brews to modern flavors — discover the perfect coffee
          crafted just for you.
        </Text>

        {/* Button */}
        <TouchableOpacity
          className="bg-amber-900 px-10 py-3 mt-8 rounded-full shadow-md"
          onPress={() => router.replace("/home")}
        >
          <Text className="text-white text-lg font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
