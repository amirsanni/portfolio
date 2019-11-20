import React, {Component} from 'react';

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
            assetURL: process.env.REACT_APP_ASSET_URL
        }
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
                    <div key={`experience_${i}`} className='row mb-4 border border-top-1 border-left-0 border-right-0 border-bottom-0'>
                        <div className="col-sm-8 h4 mt-3">{exp.position}</div>
                        <div className="col-sm-4 mt-3">
                            <img src={this.state.assetURL+exp.logo} className="float-right website-logo" alt={exp.company_name} />
                        </div>

                        <div className="col-sm-8">
                            <span className="form-text">
                                <i className="fa fa-building"></i> {exp.company_name}
                            </span>

                            <span className="form-text small"><i className="fa fa-map-marker text-muted"></i> {exp.location}</span>

                            <span className="form-text small">
                                <i className="fa fa-globe"></i> 
                                <a href={exp.website} target="_blank" rel="noopener noreferrer">Website</a>
                            </span>
                        </div>

                        <div className="col-sm-4 text-right">
                            <span className="form-text small">{`${exp.start_date} - ${exp.end_date}`}</span>
                        </div>

                        <div className="col-sm-12">
                            <b><u>Duties</u></b>
                            <ul>
                                {this.setDuties(exp.duties, i)}
                            </ul>
                        </div>
                    </div>
                );
            })
        }

        return experiences;
    }
    

    render(){
        return (
            <div className="card mb-3">
                <h2 className="text-center mt-2 text-muted">Work Experience</h2>
                <div className="card-body">{this.setExperiences()}</div>
            </div>
        );
    }
}

export default Experience;