import React, { Component } from 'react';
import './Analytics.css';

export class Analytics extends Component {
    render() {
        return (
            <div className='analytics-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='noumber-div'>
                                <p className='numbers'>10,000+</p>
                                <p className='number-description'>happy users</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='noumber-div'>
                                <p className='numbers'>120+</p>
                                <p className='number-description'>email templates</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='noumber-div'>
                                <p className='numbers'>24/7</p>
                                <p className='number-description'>support team</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='noumber-div'>
                                <p className='numbers'>3</p>
                                <p className='number-description'>pricing plans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}