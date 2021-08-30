import { ADD_ARTICLE } from '../actionTypes';

const initialState = {
  articles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    default:
      return state;
  }
};
