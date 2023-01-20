
/*

Yt link: https://www.youtube.com/watch?v=EKsoj96HQGY&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=10

== LESSONS 1 T0 10 ==

>> 3 Core Concepts
Store -> holds the state
Action -> describes what happen
Reducer -> ties the store and action together

>> 3 Principles
1. The state of your whole application is stored in an object tree within a single store.
   - Example: 
    {
        numerOfCakes: 10
    }

2. The only way to change a state is to emit an action , an object describing what happened.
    - action example: BUY_CAKE
    - Example:
    {
        type: BUY_CAKE
    }

3. To specify how the state tree is transformed by actions, you write pure reducers.
    - Reducer -> (previousState, action) => newState
v 
>> ACTIONS
- only way your application can interact with the store
- have a type property

>> REDUX STORE
- holds the state
- getState() -> gives access to the state
- dispatch(action) -> gives access to update the state
- subscribe(listener) -> registers listeners
*/

import { legacy_createStore as createStore, combineReducers } from "redux";

// ACTION EXAMPLE
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "Second redux action"
    }
}

// REDUCER EXAMPLE
// (previousState, action) => newState
const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 40
}

const cakeReducer = (state = initialCakeState, action) => {

    switch (action.type) {

        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {

    switch (action.type) {

        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }

        default: return state
    }
}

// STORE EXAMPLE
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

// 1st Responsibility
console.log("Initial state", store.getState());

// 4th Responsibility
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));

// 3rd Responsibility
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// calling of unsubscribe method
unsubscribe();