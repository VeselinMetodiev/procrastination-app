import React from 'react'
import { Text, View } from "react-native";
import { useSearchParams } from 'expo-router'

function MessageRoom() {
    const { id } = useSearchParams();
    return (
        <View>
            <Text>Messages with Lukas</Text>
            <Text>Messages with Alex</Text>
            <Text>Messages with Asen</Text>
        </View>
    )
}

export default MessageRoom