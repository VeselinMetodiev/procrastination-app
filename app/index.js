import { Text, View } from "react-native";
import { Link, Redirect, Stack } from 'expo-router'

const users = [
    {
        name: 'Vesko',
        username: 'viex'
    },
    {
        name: 'Asen',
        username: 'barbarona'
    }
]

export default function Home() {
    return <Redirect href={'/home'} />
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Home page</Text>
    //     <Link href='/Vesko?name=Veselin'>Open User</Link>

    //     {users.map((user) => (
    //         <Link href={{ pathname: `/${user.username}`, params: { name: `${user.name}`, username: `${user.username}` } }}>Open {user.name}'s' Profile</Link>
    //     ))}
    // </View>;

}