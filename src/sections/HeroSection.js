import React, { Component } from 'react';
import './HeroSection.css';

export class HeroSection extends Component {
    render() {
        return (
            <div className='hero-section'>
                <div className="container">
                    <div className='col-md-7'>
                        <div className="hero-items">
                            <p className='tittle'>Automate SMS reminders about your classes and appointments</p>
                            <div className="hero-decription">
                                <p className='paragraph'>With this app, you will never have to worry about no-shows and calling your customers back to remind them aobut the booked appointement </p>
                            </div>
                            <div className="btn-div">
                                <button>Try now for FREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}