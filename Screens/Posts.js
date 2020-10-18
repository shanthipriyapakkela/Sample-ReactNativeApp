import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Directions, FlatList, ScrollView } from "react-native-gesture-handler";

import Post from "../components/Post";
import { color } from "../constants/colors";
import { SET_SEARCH_VAL, getPostdata } from "../store/actions";

const Posts = ({ navigation }) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.root.PostsData);
  const SearchText = useSelector((state) => state.root.SearchValue);

  useEffect(() => {
    dispatch(getPostdata());
  }, [dispatch]);

  const inputHandler = (text) => {
    dispatch({ type: SET_SEARCH_VAL, payload: text });
  };

  const filteredData = Data.filter((post) =>
    post.title.toLowerCase().includes(SearchText.toLowerCase())
  );

  return (
    <View style={styles.screen}>
      <View style={styles.searchcontainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16, width: "50%" }}>
          Enter Search Text :
        </Text>
        <View style={styles.inputcontainer}>
          <TextInput
            value={SearchText}
            onChangeText={(text) => inputHandler(text)}
          />
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredData}
        renderItem={(itemdata) => (
          <Post postdata={itemdata.item} navigation={navigation} />
        )}
        numColumns="1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  searchcontainer: {
    flexDirection: "row",
    width: "80%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputcontainer: {
    width: "50%",
    borderWidth: 1,
    borderColor: color.warning,
  },
});

export default Posts;
