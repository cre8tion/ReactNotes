/*
Redux is a state management framework that can be used with a number of different web technologies, including React.

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components,
and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store.
This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

This also means that any time any piece of your app wants to update state, it must do so through the Redux store.
The unidirectional data flow makes it easier to track state management in your app.


The Redux store is an object which holds and manages application state.
There is a method called createStore() on the Redux object, which you use to create the Redux store.
This method takes a reducer function as a required argument. The reducer function is covered in a later challenge, and is already defined for you in the code editor.
It simply takes state as an argument and returns state.

Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.

*/

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

let store = Redux.createStore(reducer);


/*

The Redux store object provides several methods that allow you to interact with it.
For example, you can retrieve the current state held in the Redux store object with the getState() method.


The code from the previous challenge is re-written more concisely in the code editor.
Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.

*/

const store = Redux.createStore(
  (state = 5) => state
);

var currentState = store.getState();


/*

Since Redux is a state management framework, updating state is one of its core tasks.

In Redux, all state updates are triggered by dispatching actions.

An action is simply a JavaScript object that contains information about an action event that has occurred.
The Redux store receives these action objects, then updates its state accordingly.

Sometimes a Redux action also carries some data.
For example, the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store.
The store then conducts the business of updating state based on the action that occurred.


Writing a Redux action is as simple as declaring an object with a type property.

Declare an object action and give it a property type set to the string 'LOGIN'.

*/

var action = {
  type:"LOGIN"
}






/*

After creating an action, the next step is sending the action to the Redux store so it can update its state.
In Redux, you define action creators to accomplish this.


An action creator is simply a JavaScript function that returns an action.
In other words, action creators create objects that represent action events.


Define a function named actionCreator() that returns the action object when called.

*/


const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator(){
    return action;
}


/*

dispatch method is what you use to dispatch actions to the Redux store.
Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred.
Then the method dispatches an action object to the Redux store.

Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false.
There's also an action creator called loginAction() which returns an action of type LOGIN.
Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

*/


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


// SWITCH STATEMENTS

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
  switch (action.type) {
    case "LOGIN":
      return {authenticated: true};
      break;
    case "LOGOUT":
      return {authenticated: false};
      break;
    default:
      return state;
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
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
