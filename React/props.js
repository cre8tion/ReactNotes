/*
From Parent to Child Using Props
*/

class Parent extends React.Component {
state = { data : "Hello World" }
render() {

        return (
            <div>
                 <Child1/>            //no data to send
                 <Child2 dataFromParent = {this.state.data} />
            </div>
        );
    }
}
//It is no compulsion to use the data to send as a state, simple vars or const variables could also be used to send data from Parent to Child.

class Child2 extends React.Component {
render() {

        return (
            <div>
                The data from parent is:{this.props.dataFromParent}
            </div>
        );
    }
}

// From Child to Parent Using Callbacks
// Step 1: Define a callback function that takes in a parameter which we consider having accessed from the child in the Parent.js
// Step 2: Also, send the defined callback function as a props to the Child1.js

class Parent extends React.Component {
state = { message: "" }
callbackFunction = (childData) => {
      this.setState({message: childData})
},
render() {
        return (
            <div>
                 <Child1 parentCallback = {this.callbackFunction}/>
                 <p> {this.state.message} </p>
            </div>
        );
      }
}

// Step 3: In Child1.js send the data using this.props.callback(dataToParent)

class Child1 extends React.Component{
sendData = () => {
         this.props.parentCallback("Hey Popsie, How’s it going?");
    },
render() {
//you can call function sendData whenever you'd like to send data from child component to Parent component.
    }
};

// Between Siblings

/*
Method 1: Combine the above two methods of sharing data.
This method however, will not work for complicated directory structures as one will have to write large bits of code for sending data between components at far levels from each other.
The data, then will have to be pushed and pulled through each middle level.
*/

/*
Method 2: Use a global store maintaining the states of all child components which are needed to interact and consume the data required from the store — Redux
*/

/*
Method 3: Use React’s Context API
There are tons of articles and blogs already regarding why React upgraded to Context API and which one is better in what terms, these two articles would help one understand it all:
*/

// Step1: Create a Provider Component for the two children.
// This Provider mantains the state (data to be used by both components and some callback used to manipulate the states) and returns a contextObject.Provider JSX component )

// Step 2: Pass the state and the callback function as props to all children inside the Provider Component.

export const MContext = React.createContext();  //exporting context object

class MyProvider extends Component {
state = {message: ""}
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value })}}>
            {this.props.children}   //this indicates that the global store is accessible to all the child tags with MyProvider as Parent
            </MContext.Provider>)
    }
}

// (a) To set or manipulate the message by Child1, it has to access Provider and set the states of the Provider.
// (b) To view/access the data by Child2, it has to access Provider to get the states.

// Step 3: Use MyProvider component as a Parent to the two children — Child1, Child2.

class App extends React.Component {
render() {
        return (
            <div>
                 <MyProvider>
                      <div className="App">
                      <Child1/>
                      <Child2/>
                      </div>
               </MyProvider>
            </div>
        );
      }
}

// Step 4: Implement the desired result in the same manner, but this time, using ContextObject.Consumer as explained below:
// Both the children — Child1 and Child2 are the consumers of the Provider. Henceforth, they access the Provider within Consumer Tags.

import MContext

class Child1 extends React.Component {
render() {
    return (
        <div>
        <Mcontext.Consumer>
        {(context) => (
       <button onClick={()=>{context.setMessage("New Arrival")}}>Send</button>
       )}
        </Mcontext.Consumer>
        </div>
    ) }
}

// How does Child2 receives the data now?
// Simply, accessing the Provider withing Consumer tags.

import MContext

class Child2 extends React.Component {
render() {
       return (
         <div>
            <Mcontext.Consumer>
             {(context) => (
              <p>{context.state.message}}</p>)}
            </Mcontext.Consumer>
         </div>
   )}
}
