import React from 'react';
import PropTypes from 'prop-types';
import './section.scss';

const SectionLayout = props => {
    return (
        <section className={`section-layout px-3 ${props.className}`} ref={props._ref || null}>
            <div className="container">{props.content}</div>
        </section>
    );
};

SectionLayout.propTypes = {
    className: PropTypes.string,
    content: PropTypes.node,
    _ref: PropTypes.func,
};

export default SectionLayout;
