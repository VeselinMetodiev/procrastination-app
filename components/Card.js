import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Card = ({ title, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: imageSource }} style={styles.image} />

        <View style={styles.textContainer}>
          <View style={styles.rectangle}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    width: 150,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#aaa",
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
