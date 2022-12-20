import axios from "axios";
import { CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CategoryConstants";
import { logout } from "./userActions";


//CREATE CATEGORY
export const createCategory = (categoryName, categoryDescription,  categoryImage) => async (dispatch, getState) => {
    try {
      dispatch({ type: CATEGORY_CREATE_REQUEST });
      const {
       userLogin: { userInfo },
     } =  getState();
  
 
  if(userInfo.data.token){
   const config = {
     headers: {
       Authorization: `Bearer ${userInfo.data.token}`,
     },
   };
 
 const {data} =  await axios.post(`/api/category/`, {categoryName, categoryDescription,  categoryImage}, config);
    
   dispatch({ type: CATEGORY_CREATE_SUCCESS, payload:data });
 
  }
    
      
    } catch (error) {
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CATEGORY_CREATE_FAIL,
      payload: message,
    });
    }
  };
 


  //GET LIST OF CATEGORIES
export const listCategories = () => async (dispatch, getState) => {
    try {
      dispatch({ type: CATEGORY_LIST_REQUEST });
      const {
       userLogin: { userInfo },
     } =  getState();
  
 
  if(userInfo.data.token){
   const config = {
     headers: {
       Authorization: `Bearer ${userInfo.data.token}`,
     },
   };
 
   const { data } = await axios.get(`/api/categories`, config);
    
   dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data.data });
 
  }
    
      
    } catch (error) {
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: message,
    });
    }
  };



  //DELETE CATEGORY
export const deleteCategory = (categoryId) => async (dispatch, getState) => {
    try {
      dispatch({ type: CATEGORY_DELETE_REQUEST });
      const {
       userLogin: { userInfo },
     } =  getState();
  
 
  if(userInfo.data.token){
   const config = {
     headers: {
       Authorization: `Bearer ${userInfo.data.token}`,
     },
   };
 
   await axios.delete(`/api/category/${categoryId}`, config);
    
   dispatch({ type: CATEGORY_DELETE_SUCCESS });
 
  }
    
      
    } catch (error) {
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload: message,
    });
    }
  };
 


  // EDIT PRODUCT
export const editCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_EDIT_REQUEST });
    const { data } = await axios.get(`/api/category/${categoryId}`);
    dispatch({ type: CATEGORY_EDIT_SUCCESS, payload: data });
  }catch (error) {
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  if (message === "Not authorized, token failed") {
    dispatch(logout());
  }
  dispatch({
    type: CATEGORY_EDIT_FAIL,
    payload: message,
  });
  }
};
 