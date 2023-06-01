import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const users = [
  {
    name: "Gym",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Car",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
  {
    name: "Home",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Work",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
  {
    name: "Family",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Social",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
];

function Feed() {
  return (
    <>
      <ScrollView style={styles.container}>
        {users.map((u, i) => {
          return (
            <Card key={u.name}>
              <Card.Title>{u.name}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
              />
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
            </Card>
          );
        })}
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Add New"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Feed;
