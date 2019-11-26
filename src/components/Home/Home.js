import React from 'react';
import BasicInfo from './BasicInfo';
import Projects from '../Projects/Projects';
import Experience from './Experience';
import Education from './Education';
import Footer from '../Footer';

class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className='bg'>
                    <BasicInfo data={this.props.data}/>

                    <Projects projects={this.props.data.projects} limit='6' />
                </div>


                <Experience experiences={this.props.data.experience} />

                <Education education={this.props.data.education} />

                <Footer socials={this.props.data.basicInfo.social} />
            </React.Fragment>
        );
    }
}

export default Home;