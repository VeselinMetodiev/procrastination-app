import React from "react";
import { View, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Text, Button, Icon } from "@rneui/themed";
import Card from "../components/Card";

const categories = [
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
  const handleCardPress = (card) => {
    // Handle press event for the card
    console.log("Pressed card:", card);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.categoriesContainer}>
          {categories.map((u, i) => {
            return <Card title={u.name} imageSource={u.avatar} text={"eho"} />;
          })}
        </View>
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
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
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
