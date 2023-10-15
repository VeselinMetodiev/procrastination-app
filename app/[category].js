import { Text, View, Button } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const { category } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: category,
          headerStyle: { backgroundColor: "#1E2632" },
          headerTintColor: "#FFE030",
        }}
      />
      <Text>This is Category: {category}</Text>
      <Button title="go back" onPress={() => router.back()} />
    </View>
  );
}
