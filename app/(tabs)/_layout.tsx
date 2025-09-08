import { Tabs } from "expo-router";
import "../../global.css"
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,   // ✅ hide header globally for all tabs
      }}
    >
      
    </Tabs>
  );
}
