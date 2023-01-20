
/*

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

3. To specify how the state tree is transformed by actions, you write pure reducers.
    - Reducer -> (previousState, action) => newState

*/



