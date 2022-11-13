import React, { Component } from 'react';
import './Download.css';
import mobiles from '../assets/mobiles.png'
import google from '../assets/google.png'
import iStore from '../assets/istore.png'

export class Download extends Component {
    render() {
        return (
            <div className='download-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="download-tittle-div">
                                <p className='heading-2'>Download App <span className='blue-text'>now</span></p>
                            </div>
                            <div className="download-description-div">
                                <p className='download-description'>Cut out no-shows. Easy-to-use and completely customizable. <br /> Pays for itself with one saved no-show.</p>
                            </div>
                            <div className="download-btns">
                                <button className='google-btn'>
                                    <img src={google} alt="" />
                                </button>
                                <button className='iStore-btn'>
                                    <img src={iStore} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className='mobiles-div'>
                                <img src={mobiles} alt="iRemember mobile app" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}