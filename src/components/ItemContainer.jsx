import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h1>Component with a prop itself {"(with a condition statement)"} using mapStateToProps and mapDispatchToProps</h1>
            <h2>Item is {props.nameOfItem} {props.item}</h2>
            <button onClick={props.buyItem}>Buy {props.nameOfItem}</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCream

    return {
        item: itemState,
        nameOfItem: ownProps.cake ? "Cake 🎂" : "Ice Cream 🍧"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

// can replace [name]ToProps function with null if one will not be used
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
