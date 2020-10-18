import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { color } from "../constants/colors";

const Post = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("PostDetails", {
          postId: props.postdata.id,
        });
      }}
    >
      <View style={styles.itemList}>
        <View>
          <Text>
            <Text style={styles.heading}>Id: </Text>
            {props.postdata.id}
          </Text>
          <Text>
            <Text style={styles.heading}>Title: </Text>
            {props.postdata.title}
          </Text>
          <Text>
            <Text style={styles.heading}>Content: </Text>
            {props.postdata.body.slice(0, 30)}
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button
              color={color.warning}
              title="View"
              onPress={() => {
                props.navigation.navigate("PostDetails", {
                  postId: props.postdata.id,
                });
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: color.teritary,
    borderWidth: 2,
    borderColor: color.secondary,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "column",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buttoncontainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: "25%",
  },
});

export default Post;
