import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default () => {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "pink",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="th-large" size={24} color={color} />
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
    </Provider>
  );
};
