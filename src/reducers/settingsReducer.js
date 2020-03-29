const initialState = {
    isCelsius: true
  };
  
  function settingsReducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_CELSIUS':
        return {
          ...state,
          isCelsius: !state.isCelsius
        }
      default:
        return state
    }
  }
  
  export default settingsReducer;