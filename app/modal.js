import { Text, View, Button } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

export default function Modal() {
    const router = useRouter();

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Modal</Text>
        <Button title='go back' onPress={() => router.back()} />
    </View>;
}