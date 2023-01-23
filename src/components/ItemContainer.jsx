import React from 'react';
import { connect } from 'react-redux';

function ItemContainer(props) {
    return (
        <div>
            <h1>Component with a prop itself {"(with a condition statement)"} using mapStateToProps</h1>
            <h2>Item is {props.nameOfItem} {props.item}</h2>
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

export default connect(mapStateToProps)(ItemContainer);
