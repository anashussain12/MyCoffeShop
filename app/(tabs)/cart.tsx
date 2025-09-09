import { View, Text } from "react-native";

export default function Cart() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-amber-900">Your Cart 🛒</Text>
      <Text className="text-gray-500 mt-2">Order details will appear here.</Text>
    </View>
  );
}
