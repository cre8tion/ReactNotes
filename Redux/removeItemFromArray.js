const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index: index
  }
}

const store = Redux.createStore(immutableReducer);



// SPLICE
let newState = [...state];
newState.splice(action.index, 1);
return newState;

// FLITER
return state.filter( item=> item != state[action.index]  )


// SLICE
return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
]


/*
Time to practice removing items from an array. The spread operator can be used here as well.
 Other useful JavaScript methods include slice() and concat().


The reducer and action creator were modified to remove an item from an array based on the index of the item.
Finish writing the reducer so a new state array is returned with the item at the specific index removed.

*/
