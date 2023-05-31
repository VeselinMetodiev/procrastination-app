import React from 'react'
import { Text, View } from "react-native";
import { Link } from 'expo-router'

function Messages() {
    return (
        <View>
            <Link href="/home/messages/123">Messages with Lukas</Link>
            <Link href="/home/messages/124">Messages with Alex</Link>
            <Link href="/home/messages/125">Messages with Asen</Link>
        </View>
    )
}

export default Messages