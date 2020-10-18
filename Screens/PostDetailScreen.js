import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import DetailPost from "../components/DetailPost";
import { SELECTED_POST_DATA } from "../store/actions";

const PostsDetails = ({ route, navigation }) => {
  const { postId } = route.params;
  const dispatch = useDispatch();
  const selectedPostData = useSelector((state) => state.root.SelectedPost);

  const getselectedData = useCallback(() => {
    dispatch({ type: SELECTED_POST_DATA, payload: postId });
  }, []);

  useLayoutEffect(() => {
    getselectedData();
  }, []);
  return (
    <View style={styles.screen}>
      <DetailPost selectedData={selectedPostData} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default PostsDetails;
