import { Text, View, Button } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

export default function Profile() {
    const router = useRouter();
    const { name, username } = useSearchParams();

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Stack.Screen options={{
            title: username,
            headerStyle: { backgroundColor: '#1E2632' },
            headerTintColor: '#FFE030',
        }} />
        <Text>Hello {name} (@{username})</Text>
        <Button title='go back' onPress={() => router.back()} />
    </View>;
}