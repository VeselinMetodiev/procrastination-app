import { Stack } from 'expo-router'

export default () => {
    return <Stack screenOptions={{ tabBarShowLabel: false }}>
        <Stack.Screen name="index" options={{ title: "Messages" }} />
        <Stack.Screen name="[id]" options={{ title: "Message Room" }} />
    </Stack>
}