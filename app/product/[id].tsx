import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PRODUCTS = [
  {
    id: "1",
    name: "Cappuccino",
    price: 999,
    image: require("../../assets/images/cappuccino.png"),
  },
  {
    id: "2",
    name: "Espresso",
    price: 799,
    image: require("../../assets/images/espresso.png"),
  },
  {
    id: "3",
    name: "Latte",
    price: 8.99,
    image: require("../../assets/images/espresso.png"),
  },
  {
    id: "4",
    name: "Mocha",
    price: 10.99,
    image: require("../../assets/images/mocha.jpg"),
  },
];

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return <Text>Product not found</Text>;

  return (
    <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-white p-5">
      <Image source={product.image} className="w-full h-64 rounded-lg" />
      <Text className="text-2xl font-bold text-amber-900 mt-4">
        {product.name}
      </Text>
      <Text className="text-gray-500 text-lg">{product.price} PKR</Text>

      <TouchableOpacity
        onPress={() => router.push("/cart")}
        className="bg-amber-900 py-3 rounded-xl mt-6"
      >
        <Text className="text-white text-center text-lg">Confirm Order</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
