
const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_EMAIL':
      return {
        ...state,
        items: action.payload
      };

    case 'GET_ONE_EMAIL':
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
