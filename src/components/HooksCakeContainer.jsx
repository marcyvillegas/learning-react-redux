import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {

    const [number, setNumber] = useState(1)

    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>🎂 From HooksCakeContainer which uses useSelector and useDispatch Hook</h1>
            <h4>Number of Cake: {numOfCakes}</h4>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
