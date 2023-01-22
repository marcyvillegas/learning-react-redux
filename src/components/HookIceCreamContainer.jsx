import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux';

function HooksIceCreamContainer() {

    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>🍧 From HooksCakeContainer which uses useSelector and useDispatch Hook</h1>
            <h4>Number of Cake: {numOfIceCream}</h4>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default HooksIceCreamContainer;
