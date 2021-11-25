import { useState, useEffect } from "react";

import { connect } from "react-redux";

const MintSection2 = props => {

    const {contracts} = props.web3Reducer;

    useEffect(
        () => {

        }, []
    );

    return(
        <div>

        </div>
    );
}

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer
});

export default connect(
    mapStateToProps,
    null    
)(MintSection2);