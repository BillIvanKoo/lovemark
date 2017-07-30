import initialJewelleryState from './initialJewelleryState';

import * as actionType from '../actions/constants'

const jewelleryReducer = (initialState=initialJewelleryState, action) => {
  switch (action.type) {
    case actionType.FETCH_JEWELLERIES_SUCCESS:
      return [...action.jewelleries]
    case actionType.ADD_JEWELLERY_SUCCESS:
      return [...initialState, action.jewellery]
    case actionType.REMOVE_JEWELLERY_SUCCESS:
      return [...initialState.filter(jewellery => jewellery._id !== action.jewellery._id)]
    case actionType.UPDATE_JEWELLERY_SUCCESS:
      return [...initialState.filter(jewellery => jewellery._id !== action.jewellery._id), action.jewellery]
    default:
      return initialState
  }
};

export default jewelleryReducer;
