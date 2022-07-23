const initialState = {
  loading: false,
  actionLoading: false,
}
const loading = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTION_LOADING':
      return {
        ...state,
        actionLoading: action.payload,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}
export default loading
