import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import dataSlider from './data-slider';

const VideoSlider = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    console.log('🚀 ~ file: index.js ~ line 8 ~ VideoSlider ~ currentVideo', currentVideo);

    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '25rem',
    };

    return (
        <div className="columns is-centered">
            <div className="column is-7">
                <h1 className="title is-1 has-text-centered has-text-white">{dataSlider[currentVideo].name}</h1>
                <Splide
                    options={options}
                    onMove={event => {
                        setCurrentVideo(event.index);
                    }}
                    aria-labelledby="autoplay-example-heading"
                    hasTrack={false}
                >
                    <div style={{ position: 'relative' }}>
                        <SplideTrack>
                            {dataSlider.map(slide => (
                                <SplideSlide key={slide.id}>
                                    <iframe
                                        title={slide.title}
                                        src={slide.src}
                                        alt={slide.alt}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '10px' }}
                                    />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </div>
                    <div className="splide__progress">
                        <div className="splide__progress__bar" />
                    </div>
                    <div className="pt-5 has-text-centered">
                        <button className="splide__toggle button is-cyellow is-rounded is-medium is-borderless">
                            <span className="splide__toggle__play has-text-weight-bold">Play</span>
                            <span className="splide__toggle__pause has-text-weight-bold">Pause</span>
                        </button>
                    </div>
                </Splide>
            </div>
        </div>
    );
};

export default VideoSlider;
