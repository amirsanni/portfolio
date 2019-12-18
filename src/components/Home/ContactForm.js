import React from 'react';

export default class ContactForm extends React.Component{
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            msg: '',
            progressMsg: ''
        };
    }


    render(){
        return (
            <div className='bg-alt'>
                <div className='container pb-5 pt-3 justify-content-center'>
                    <div className='row'>
                        <div className='col-md-8 offset-2' id='contactMe'>
                            <div className='row'>
                                <div className='col-12 text-center h2'>
                                    Send me a Message
                                </div>

                                <div className='col-12 text-center h6 font-weight-light mb-4'>
                                    Have an offer, a question or just want to say hi? Shoot!
                                </div>

                                <div className='col-md-6'>
                                    <label className='font-weight-lighter'>Your Name:</label>
                                    <input type='text' placeholder='Your Name' className='form-control rounded-0 border-0' />
                                    <span className='form-text'></span>
                                </div>

                                <div className='col-md-6'>
                                    <label className='font-weight-lighter'>Your Email:</label>
                                    <input type='email' placeholder='Your Email' className='form-control rounded-0 border-0' />
                                    <span className='form-text'></span>
                                </div>

                                <div className='col-12 mt-3'>
                                    <label className='font-weight-lighter'>Your Message:</label>
                                    <textarea className='form-control rounded-0 border-0' rows='5' placeholder='Your Message...'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}