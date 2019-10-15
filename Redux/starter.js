// MOST BASIC

const store = Redux.createStore(
  (state = 5) => state
);

var currentState = store.getState();


//


const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator(){
    return action;
}

// >>> UP/DOWN the same

// IMPT
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());


/*
Redux: Handle an Action in the Store


After an action is created and dispatched, the Redux store needs to know how to respond to that action.

This is the job of a reducer function.
Reducers in Redux are responsible for the state modifications that take place in response to actions.

A reducer takes state and action as arguments, and it always returns a new state.
It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises.
The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that state is read-only.
In other words, the reducer function must always return a new copy of state and never modify state directly.
Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions.

You'll practice this in later challenges.


The code editor has the previous example as well as the start of a reducer function for you.
Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true.
Otherwise, it returns the current state.

Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.

*/



const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type =="LOGIN"){
    return {login:true};
  }
  else{
    return state;
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};





/*
A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used.

You can refactor the code you're working with to write the action types as const declarations.


Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively.
Then, edit the authReducer() and the action creators to reference these constants instead of string values.

Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

*/




const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
