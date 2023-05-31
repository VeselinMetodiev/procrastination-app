import { Stack, useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

function Layout() {
    const router = useRouter();
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#FFE030' },
            headerTintColor: '#1E2632',
            headerTitleStyle: {
                fontWeight: 'bold'
            },

        }} >
            <Stack.Screen name="index" options={{
                title: 'Home', headerRight: () => (
                    <Entypo onPress={() => router.push('/modal')} name="info-with-circle" size={22} color="black" />
                )
            }} />
            <Stack.Screen name="modal" options={{
                title: 'Modal', presentation: 'modal',
                headerStyle: { backgroundColor: '#1E2632' },
                headerTintColor: 'white',
            }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack >
    )
}

export default Layout;