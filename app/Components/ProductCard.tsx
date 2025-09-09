import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ProductCard({ product }: any) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/product/[id]",
          params: { id: product.id },
        })
      }
      className="bg-white rounded-xl border p-3 mr-4"
    >
      <Image source={product.image} className="w-36 h-36 rounded-lg" />
      <Text className="text-lg font-semibold text-amber-900 mt-2">
        {product.name}
      </Text>
      <Text className="text-gray-500">{product.price} PKR</Text>
    </TouchableOpacity>
  );
}
