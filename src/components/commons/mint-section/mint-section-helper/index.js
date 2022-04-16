import React from 'react';

const MintSectionHelper = props => {
    return (
        <div className="is-hdarkgray px-5 py-6">
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                {props.title}
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-underlined">
                {props.subtitle}
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                {props.data.map((item, index) => {
                    return (
                        <p className="has-text-white" key={index}>
                            {item}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default MintSectionHelper;
