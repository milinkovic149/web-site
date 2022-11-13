import React, { Component } from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';

export class Footer extends Component {
    render() {
        return (
            <div className='footer-section'>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="logo-div">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <p className='footer-text'>@ All rights reserved 2021</p>
                            <p className='footer-text'>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}