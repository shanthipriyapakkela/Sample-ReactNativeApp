import React from "react";
import Data from "../data.json";
import { GET_POST_DATA, SELECTED_POST_DATA, SET_SEARCH_VAL } from "./actions";

const initialState = {
  PostsData: [],
  SelectedPost: [],
  SearchValue: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA: {
      return {
        ...state,
        PostsData: action.payload,
      };
    }
    case SET_SEARCH_VAL: {
      return {
        ...state,
        SearchValue: action.payload,
      };
    }
    case SELECTED_POST_DATA:
      const selecteddata = state.PostsData.find(
        (post) => post.id === action.payload
      );
      return { ...state, SelectedPost: selecteddata };

    default:
      return state;
  }
};

export default reducer;
