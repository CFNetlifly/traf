import React from 'react';
import './loading.scss';

const LoadingComponent = () => {
    return (
        <div
            className="has-background-primary"
            style={{
                height: '100vh',
                width: '100%',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <div className="has-text-centered">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1 className="title has-text-white is-4">Loading...</h1>
            </div>
        </div>
    );
};

export default LoadingComponent;
