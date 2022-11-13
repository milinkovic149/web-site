import React, { useRef } from 'react';
import './Feedback.css';
import open from '../assets/open-marks.svg';
import close from '../assets/close-marks.svg';
import next from '../assets/next.svg';

export function Feedback() {

    const carousel = useRef(null);
    function handlePrevious(e) {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        console.log(e.target.parentElement.nextElementSibling)
        e.target.parentElement.nextElementSibling.classList.remove('disable');
        e.target.parentElement.classList.remove('enable');
    }

    function handleNext(e) {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        e.target.parentElement.previousElementSibling.classList.add('enable');
        e.target.parentElement.classList.add('disable');
    }

    return (
        <div className='feedback-section'>
            <div className="container">
                <div className='feedback-tittle'>
                    <p className='heading-2'>What our clients say</p>
                </div>
                <div className='buttons'>
                    <button onClick={handlePrevious} className='previous-btn'><img src={next} alt="" /></button>
                    <button onClick={handleNext}><img src={next} alt="" /></button>
                </div>
                <div className="carousel" ref={carousel}>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>Very easy to use, and <br />customizable. Also, iRemember <br /> has the best customer service.</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle' id='tanner'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Tanner Balfany</p>
                                        <p className='card-profession'>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>With iRemember our days feel <br />less  chaotic, more productive <br /> and business is up!</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle' id='kayti'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Kayti Lomeli</p>
                                        <p className='card-profession'>Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>My review on iRemember is <br /> 10/10! Great software, no complaints.</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle' id='mike'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Mike Devine</p>
                                        <p className='card-profession'>Businessman</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>We've been using iRemember for my the school. It's been a <br /> pleasure working with you.</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle' id='iris'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Iris Carrol</p>
                                        <p className='card-profession'>CEO Lexica School</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>Very easy to use, and customizable. <br />Also. iReminder has the best customer service</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Tanner Balfany</p>
                                        <p className='card-profession'>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>Very easy to use, and customizable. <br />Also. iReminder has the best customer service</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Tanner Balfany</p>
                                        <p className='card-profession'>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>Very easy to use, and customizable. <br />Also. iReminder has the best customer service</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Tanner Balfany</p>
                                        <p className='card-profession'>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='open-mark-div'>
                            <img src={open} alt="" />
                        </div>
                        <p className='card-text'>Very easy to use, and customizable. <br />Also. iReminder has the best customer service</p>
                        <div className='close-mark-div d-flex justify-content-end'>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <div className="row">
                                <div className='col-2 col-md-2 '>
                                    <div className='circle'></div>
                                </div>
                                <div className='col-10 col-md-9'>
                                    <div className="person">
                                        <p className='card-name'>Tanner Balfany</p>
                                        <p className='card-profession'>Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



