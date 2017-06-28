import initialJewelleryState from './initialJewelleryState';

const jewelleryReducer = (initialState=initialJewelleryState, action) => {
  switch (action.type) {
    default:
      return initialState
  }
};

export default jewelleryReducer;
