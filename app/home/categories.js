import React from "react";
import { View, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Text, Button, Icon } from "@rneui/themed";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

function Feed() {
  const categories = useSelector((state) => state.todos.categories);

  const handleCardPress = (card) => {
    // Handle press event for the card
    console.log("Pressed card:", card);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.categoriesContainer}>
          {categories.map((u, i) => {
            return (
              <Card
                key={i}
                title={u.name}
                imageSource={u.avatar}
                text={"eho"}
              />
            );
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
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
