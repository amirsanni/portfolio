import React from 'react';

export default class ContactForm extends React.Component{
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            msg: '',
            progressMsg: '',
            progressMsgClass: 'text-info'
        };
    }


    handleStateChange = (e)=>{
        this.setState({[e.target.id]: e.target.value});
    }


    sendMessage = ()=>{
        if(this.state.name.trim() && this.state.email.trim() && this.state.msg.trim()){
            this.setState({
                progressMsg: '<div class="spinner-border text-info spinner-border-sm" role="status"></div> Delivering your message. Please wait....',
                progressMsgClass: 'text-info'
            });

            let fd = new FormData();

            fd.append('msg', this.state.msg);
            fd.append('name', this.state.name);
            fd.append('email', this.state.email);
            fd.append('action', 'send_email');

            fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                mode:'cors',
                body: fd
            }).then((response)=>{
                if(response.ok){
                    return response.json();
                }

                throw new Error('Oops! I must have missed my way. Couldn\'t deliver your message at this time. Please try again.');
            }).then((rd)=>{
                if(rd.data.status === 1){
                    this.setState({
                        progressMsg: 'Your message has been delivered. I\'ll get back to you in due time. <br> Thank you.',
                        progressMsgClass: 'text-success'
                    });

                    setTimeout(()=>{
                        this.clearFields();
                    }, 3000);
                }

                else{
                    this.setState({
                        progressMsg: rd.data.msg ? rd.data.msg : 'Sorry, your message could not be delivered at this time. Please try again later.',
                        progressMsgClass: 'text-danger'
                    });
                }
            }).catch((err)=>{
                this.setState({
                    progressMsg: err,
                    progressMsgClass: 'text-danger'
                });
            });
        }

        else{
            this.setState({
                progressMsg: "All fields are required!",
                progressMsgClass: 'text-danger'
            });
        }
    }


    clearFields = ()=>{
        for(let s in this.state){
            this.setState({[s]: ''});
        }
    }


    render(){
        return (
            <div className='bg-alt'>
                <div className='container pb-5 pt-3 justify-content-center'>
                    <div className='row'>
                        <div className='col-md-8 offset-md-2' id='contactMe' name='contactMe'>
                            <div className='row'>
                                <div className='col-12 text-center h2'>
                                    Send me a Message
                                </div>

                                <div className='col-12 text-center h6 font-weight-light mb-4'>
                                    Have an offer, a question or just want to say hi? Shoot!
                                </div>

                                <div className={`col-12 text-center h6 font-weight-bold mb-4 small ${this.state.progressMsgClass}`}
                                    dangerouslySetInnerHTML={{__html:this.state.progressMsg}}>
                                </div>

                                <div className='col-md-6'>
                                    <label className='font-weight-lighter'>Your Name:</label>
                                    <input type='text' 
                                        placeholder='Your Name' 
                                        className='form-control rounded-0 border-0' 
                                        id='name'
                                        value={this.state.name}
                                        onChange={this.handleStateChange}
                                    />
                                </div>

                                <div className='col-md-6'>
                                    <label className='font-weight-lighter'>Your Email:</label>
                                    <input type='email' placeholder='Your Email' className='form-control rounded-0 border-0'
                                        id='email'
                                        value={this.state.email}
                                        onChange={this.handleStateChange}
                                    />
                                </div>

                                <div className='col-12 mt-3'>
                                    <label className='font-weight-lighter'>Your Message:</label>
                                    <textarea className='form-control rounded-0 border-0' rows='5' placeholder='Your Message...'
                                        id='msg'
                                        value={this.state.msg}
                                        onChange={this.handleStateChange}></textarea>
                                </div>

                                <div className='col-12 mt-3'>
                                    <button className='btn btn-block rounded-0 app-btn-alt' onClick={this.sendMessage}>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}