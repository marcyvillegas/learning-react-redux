import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>From HooksCakeContainer which uses useSelector and useDispatch Hook</h1>
            <h4>Number of Cake: {numOfCakes}</h4>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
