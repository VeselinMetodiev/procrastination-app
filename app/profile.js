import { Text, View, Button } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

export default function Profile() {
    const router = useRouter();
    const { name, surname } = useSearchParams();

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile page of {name}: {surname}</Text>
        <Button title='go back' onPress={() => router.back()} />
    </View>;
}