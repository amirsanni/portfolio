import React, {Component} from 'react';

class Experience extends Component{
    constructor(props){
        super(props);
        this.assetURL = process.env.REACT_APP_ASSET_URL
    }


    setDuties = (duties, posIndex)=>{
        let dutyList = '';

        if(duties.length){
            dutyList = duties.map((duty, index)=>{
                return <li key={`${posIndex}_duty_${index}`} dangerouslySetInnerHTML={{__html:duty}}></li>
            });
        }

        return dutyList;
    }


    setExperiences = ()=>{
        let experiences = '';

        if(this.props.experiences.length){
            experiences = this.props.experiences.map((exp, i)=>{
                return (
                    <div key={`experience_${i}`} className='row mb-4'>
                        <div className='col-md-12'>
                            <div className='card exp-card'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <img src={this.assetURL+exp.logo} className="company-logo" alt={exp.company_name} />
                                        </div>

                                        <div className='col-md-8'>
                                            <div className='job-title'>{exp.position}</div>
                                            <div>
                                                <span>
                                                    <a className='company-info' href={exp.website} target='_blank' rel="noopener noreferrer">
                                                        {exp.company_name}
                                                    </a>
                                                </span>
                                                <span className='company-info'>&nbsp;|&nbsp;</span>
                                                <span className='company-info'>{exp.location}</span>
                                            </div>
                                            <div className='mt-2'>
                                                <ul className='duties'>
                                                    {this.setDuties(exp.duties, i)}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className='col-md-2 duration text-right'>
                                            {`${exp.start_date} - ${exp.end_date}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }

        return experiences;
    }
    

    render(){
        return (
            <div className='bg-alt'>
                <div className='container pb-3'>
                    <div className='row' id='experience'>
                        <div className="col-12 section-title text-center mb-2 mt-5">
                            <i className='fa fa-briefcase'></i> Work Experience
                        </div>
                    </div>
                    {this.setExperiences()}
                </div>
            </div>
        );
    }
}

export default Experience;