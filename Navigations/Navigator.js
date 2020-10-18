import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Posts from "../Screens/Posts";
import PostDetails from "../Screens/PostDetailScreen";
import { color } from "../constants/colors";

const Stack = createStackNavigator();

const defaultoptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? color.warning : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : color.primary,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function Navigator() {
  return (
    <Stack.Navigator screenOptions={defaultoptions}>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{ title: "All Posts" }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: "Selected Post" }}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
