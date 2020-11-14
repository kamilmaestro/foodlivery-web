export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

const initialState = {
  token: ''
};

export const contextReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };
    case AUTH_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};