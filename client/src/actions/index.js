import axios from 'axios';

import * as actionType from './constants';

export const fetchJewelleries = () => {
  return (dispatch)=>{
    axios.get('http://localhost:8888/jewelleries')
    .then((res)=>{
      dispatch(fetchJewelleriesSuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

const fetchJewelleriesSuccess = jewelleries => ({
  type: actionType.FETCH_JEWELLERIES_SUCCESS,
  jewelleries
})

export const addJewellery = jewellery => {
  return (dispatch) => {
    axios.post('http://localhost:8888/jewelleries', {
      itemCode: jewellery.itemCode,
      goldWeight: jewellery.goldWeight,
      diamondQuantity: jewellery.diamondQuantity,
      diamondCarats: jewellery.diamondCarats,
      productName: jewellery.productName,
      description: jewellery.description,
      price: jewellery.price,
      images: jewellery.images,
    }, {
      headers: localStorage.getItem('lovemark_token')
    }).then((res)=>{
      dispatch(addJewellerySuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

const addJewellerySuccess = jewellery => ({
  type: actionType.ADD_JEWELLERY_SUCCESS,
  jewellery
})

export const removeJewellery = jewellery => {
  return (dispatch) => {
    axios.delete(`http://localhost:8888/jewelleries/${jewellery._id}`, {}, {
      headers: localStorage.getItem('lovemark_token')
    }).then((res)=>{
      dispatch(removeJewellerySuccess(jewellery._id))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

const removeJewellerySuccess = jewellery => ({
  type: actionType.REMOVE_JEWELLERY_SUCCESS,
  jewellery,
})

export const updateJewellery = jewellery => {
  return (dispatch) => {
    axios.put(`http://localhost:8888/jewelleries/${jewellery._id}`, {

    }, {
      headers: localStorage.getItem('lovemark_token')
    }).then((res)=>{
      dispatch(updateJewellerySuccess(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

const updateJewellerySuccess = jewellery => ({
  type: actionType.UPDATE_JEWELLERY_SUCCESS,
  jewellery,
})

export const login = (username, password) => {
  return () => {
    axios.post('http://localhost:8888/users/signin', {
      username,
      password
    }).then((res)=>{
      localStorage.setItem('lovemark_token', res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
}