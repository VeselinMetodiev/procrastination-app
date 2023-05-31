import React from 'react'
import { Text, View } from "react-native";
import { Link } from 'expo-router'

function Search() {
    const users = [
        {
            name: 'Vesko',
            username: 'viex'
        },
        {
            name: 'Asen',
            username: 'barbarona'
        }
    ];
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home page</Text>
            <Link href='/Vesko?name=Veselin'>Open User</Link>

            {users.map((user) => (
                <Link key={user.name} href={{ pathname: `/${user.username}`, params: { name: `${user.name}`, username: `${user.username}` } }}>Open {user.name}'s' Profile</Link>
            ))}
        </View>
    )
}

export default Search