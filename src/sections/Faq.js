import React, { Component } from 'react';
import phone from '../assets/faq.png';
import './Faq.css';

export class Faq extends Component {
    render() {
        return (
            <div className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='faq-tittle'>
                                <p className='heading-2'>FAQ</p>
                            </div>
                            <div className="accordion" id='accordionExamples'>
                                <div className="accordion-item">
                                    <h2 className='accordion-header'>
                                        <button type='button' className='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target="#accordion-one">
                                            <p className='faq-text'>How to send SMS client reminders with iRemember?</p>
                                        </button>
                                    </h2>
                                    <div id="accordion-one" className='accordion-collapse collapse' data-bs-parent="#accordionExamples">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi molestias earum, ipsam blanditiis modi possimus laboriosam laborum dolores voluptatibus delectus nam neque iusto obcaecati inventore corporis quam libero, pariatur totam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className='accordion-header'>
                                        <button type='button' className='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target="#accordion-two">
                                            <p className='faq-text'>How to write a reminder text message?</p>
                                        </button>
                                    </h2>
                                    <div id="accordion-two" className='accordion-collapse collapse' data-bs-parent="#accordionExamples">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi molestias earum, ipsam blanditiis modi possimus laboriosam laborum dolores voluptatibus delectus nam neque iusto obcaecati inventore corporis quam libero, pariatur totam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className='accordion-header'>
                                        <button type='button' className='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target="#accordion-three">
                                            <p className='faq-text'>How to send a reminder text on iPhone or Android?</p>
                                        </button>
                                    </h2>
                                    <div id="accordion-three" className='accordion-collapse collapse' data-bs-parent="#accordionExamples">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi molestias earum, ipsam blanditiis modi possimus laboriosam laborum dolores voluptatibus delectus nam neque iusto obcaecati inventore corporis quam libero, pariatur totam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className='accordion-header'>
                                        <button type='button' className='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target="#accordion-four">
                                            <p className='faq-text'>Can you remind me via text message?</p>
                                        </button>
                                    </h2>
                                    <div id="accordion-four" className='accordion-collapse collapse' data-bs-parent="#accordionExamples">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi molestias earum, ipsam blanditiis modi possimus laboriosam laborum dolores voluptatibus delectus nam neque iusto obcaecati inventore corporis quam libero, pariatur totam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className='accordion-header'>
                                        <button type='button' className='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target="#accordion-five">
                                            <p className='faq-text'>Can I send text reminders to multiple people at once?</p>
                                        </button>
                                    </h2>
                                    <div id="accordion-five" className='accordion-collapse collapse' data-bs-parent="#accordionExamples">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi molestias earum, ipsam blanditiis modi possimus laboriosam laborum dolores voluptatibus delectus nam neque iusto obcaecati inventore corporis quam libero, pariatur totam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className='faq-img-div'>
                                <img src={phone} alt="iRemember mobile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}