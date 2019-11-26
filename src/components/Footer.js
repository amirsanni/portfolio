import React from 'react';
import SociaLinks from './Home/SocialLinks';

class Footer extends React.Component{
    render(){
        return (
            <div className='bg'>
                <div className='container'>
                    <div className='row footer-border pb-2'>
                        <div className='col-6 float-left mt-2 copyright'>
                            <i className='fa fa-copyright'></i> {new Date().getFullYear()} Amir Sanni
                        </div>

                        <div className='col-6 text-right mt-2 small'>
                            <SociaLinks socials={this.props.socials} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;