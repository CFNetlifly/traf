import React from 'react';
import HoldersMintSectionForm from './holders-mint-section-form';
import HoldersMintSectionHelper from './holders-mint-section-helper';

const HoldersMintSection = () => {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-narrow">
                    <HoldersMintSectionHelper />
                    <HoldersMintSectionForm />
                </div>
            </div>
        </section>
    );
};

export default HoldersMintSection;
