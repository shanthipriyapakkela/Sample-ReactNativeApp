export const SELECTED_POST_DATA = "SELECTED_POST_DATA";
export const GET_POST_DATA = "GET_POST_DATA";
export const SET_SEARCH_VAL = "SET_SEARCH_VAL";

export const getPostdata = () => {
  return async (dispatch) => {
    console.log("fetch");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resdata = await response.json();
    dispatch({ type: GET_POST_DATA, payload: resdata });
  };
};
