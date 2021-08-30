import { SET_AUTH, UNSET_AUTH } from "../actionTypes";

const initialState = {
  authenticated: false,
  token: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH: {
      const { authenticated, token } = action.payload;
      return Object.assign({}, state, {
        authenticated,
        token
      });
    }
    case UNSET_AUTH: {
      const { authenticated, token } = action.payload;
      return Object.assign({}, state, {
        authenticated,
        token
      });
    }
    default:
      return state;
  }
};
