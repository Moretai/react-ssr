export default (state={count:0}, action) => {
  switch (action.type) {
    case "ADD_NUM":
      return {count: (action.payload + state.count)}
    default:
      return state
  }
}