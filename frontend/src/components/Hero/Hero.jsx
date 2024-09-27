import React from 'react'
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="flexCenter paddings innerWidth hero-container">

                {/* Left section */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>
                            Discover all <br />
                            the local events in <br />
                            Delhi
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Your one stop destination to find what's the new local in Delhi</span>
                        <span className='secondaryText'>What are you waiting for?</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className="button">Search local</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={80} end={100} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium Events
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={80} end={100} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Customers
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={80} end={100} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Guides
                            </span>
                        </div>
                    </div>

                </div>

                {/* Right section */}
                <div className="hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero