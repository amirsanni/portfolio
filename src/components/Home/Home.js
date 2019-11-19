import React from 'react';
import BasicInfo from './BasicInfo';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row mt-3">
                <div className="col-md-3">
                    <BasicInfo basicInfo={this.props.data.basicInfo} />
                    <Summary summary={this.props.data.summary} />
                    <Skills skills={this.props.data.skills} />
                </div>

                <div className='col-md-9'>
                    <Experience experiences={this.props.data.experience} />
                    <Education education={this.props.data.education} />
                </div>
            </div>
        );
    }
}

export default Home;