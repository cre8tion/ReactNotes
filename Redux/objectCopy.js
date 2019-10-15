const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      return Object.assign({}, state, {status: 'online'});
      // return Object.assign({}, state, {status: action.type.toLowerCase()});
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);


let newObj = state; - this isn’t a new object, it’s just a reference to the original object. This isn’t specific to what your doing, it’s how JS works.

With Object.assign though, you can assign to a new object, so if you have Object.assign({}, {foo: 1, bar: 2}, {foo: 2}) (note the empty object there)
it will merge the object on the right with the the next one, so {foo: 2} over {foo: 1, bar: 2}.
That means there’s a new value for foo, so you get {foo: 2, bar: 2}. Then it takes that and merges it with the next one, which is an empty object (so you still end up with {foo: 2, bar: 2}
in this example, but if either of the second or third objects had been references, the end result would have been a new object unconnected to them)


tl/dr if you want to create a new object with Object.assign, put an empty object in as the first argument, and it will merge any other objects you give into that new object.
It’s what’s called a shallow copy.



/*
Redux: Copy an Object with Object.assign

The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an object, too.
A useful tool for handling objects is the Object.assign() utility.
Object.assign() takes a target object and source objects and maps properties from the source objects to the target object.
Any matching properties are overwritten by properties in the source objects.
This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy.

Here's an example:
  const newObject = Object.assign({}, obj1, obj2);
This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.


The Redux state and actions were modified to handle an object for the state.

Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online.

Try to use Object.assign() to complete the challenge.
*/
