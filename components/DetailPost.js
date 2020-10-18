import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { color } from "../constants/colors";

const DetailPost = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.heading}>DETAILS</Text>
      </View>
      <View style={styles.outerView}>
        <View style={styles.innerView}>
          <Text style={{ marginBottom: 10, color: color.textcolor }}>
            <Text style={{ fontWeight: "bold" }}>Title : </Text>{" "}
            {props.selectedData.title}
          </Text>
          <Text style={{ marginBottom: 10, color: color.textcolor }}>
            <Text style={{ fontWeight: "bold" }}>Body : </Text>{" "}
            {props.selectedData.body}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.teritary,
    borderWidth: 2,
    alignItems: "center",
    borderColor: color.secondary,
  },
  outerView: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: color.secondary,
    borderRadius: 25,
  },
  innerView: {
    padding: 20,
  },
  header: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default DetailPost;
