import React from 'react';
import Summary from './Summary';
import SocialLinks from './SocialLinks';
import Skills from './Skills';

class BasicInfo extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='row pt-5 pb-3'>
                    <div className='col-md-7 summary'>
                        <Summary summary={this.props.data.summary} />
                        <SocialLinks socials={this.props.data.basicInfo.social}/>
                    </div>

                    <div className='col-md-5'>
                        <span role='img' aria-label='Skills'>💪🏽</span><br />
                        <Skills skills={this.props.data.skills}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicInfo;