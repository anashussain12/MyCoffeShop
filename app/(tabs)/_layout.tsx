import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import "../../global.css";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderColor : "#000",
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          position: "absolute",
          bottom: 0, // ✅ stick to bottom
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 4,
          elevation: 4,
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
              className="mt-10"
                name={focused ? "home" : "home-outline"}
                size={26}
                color={focused ? "#A0522D" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#A0522D" : "gray",
                  marginTop: 2,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* Favourite */}
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourite",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
              className="mt-10"
                name={focused ? "heart" : "heart-outline"}
                size={26}
                color={focused ? "#A0522D" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#A0522D" : "gray",
                  marginTop: 2,
                }}
              >
                Favourite
              </Text>
            </View>
          ),
        }}
      />

      {/* Cart */}
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
              className="mt-10"
                name={focused ? "cart" : "cart-outline"}
                size={26}
                color={focused ? "#A0522D" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#A0522D" : "gray",
                  marginTop: 2,
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
