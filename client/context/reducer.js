import actions from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case actions.SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };
    case actions.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
