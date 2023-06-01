import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "pink",
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tasks" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
