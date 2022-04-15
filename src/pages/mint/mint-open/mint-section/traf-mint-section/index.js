import React from 'react';
import TRAFMintSectionForm from './traf-mint-section-form';
import TRAFMintSectionHelper from './traf-mint-section-helper';

const TRAFMintSection = () => {
    return (
        <section className="section">
            <div className="columns">
                <div className="column is-narrow">
                    <TRAFMintSectionHelper />
                    <TRAFMintSectionForm />
                </div>
            </div>
        </section>
    );
};

export default TRAFMintSection;
