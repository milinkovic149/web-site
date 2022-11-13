import React, { Component } from 'react';
import './HowItWorks.css';
import howItWorksImg from '../assets/how-it-works.png';
import steps from '../assets/steps.png';

export class HowItWorks extends Component {
    render() {
        return (
            <div className="container">
                <div className='wrapper'>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="hiw-img-div">
                                <img src={howItWorksImg} alt="iRemember notification" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="how-it-works-div">
                                <div>
                                    <p className='heading-2'> How it works?</p>
                                </div>
                                <div className='description-div'>
                                    <p className="low-opacity-text">iRemember app automatically sends each of customer a text reminder before an appointment so you can focus on your work.</p>
                                </div>
                                <div className="row">
                                    <div className="offset-md-1 col-md-11 d-flex justify-content-start">
                                        <div className="steps-img">
                                            <img src={steps} alt="" />
                                        </div>
                                        <ul className='work-steps'>
                                            <li>
                                                <p className='steps-tittle'>Set up the iRemember App</p>
                                                <p className='steps-text'>It takes only 30 seconds</p>
                                            </li>
                                            <li>
                                                <p className='steps-tittle'>Create personal account</p>
                                                <p className='steps-text'>We need just your name and email</p>
                                            </li>
                                            <li>
                                                <p className='steps-tittle'>Customizable messages and timing</p>
                                                <p className='steps-text'>Select your goals and use templates for reminders</p>
                                            </li>
                                            <li>
                                                <p className='steps-tittle'>You are ready to start sending!</p>
                                                <p className='steps-text'>Enjoy!</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}