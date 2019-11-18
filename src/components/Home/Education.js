import React from 'react';

class Education extends React.Component{
    setEducation = ()=>{
        let education = '';

        if(this.props.education.length){
            education = this.props.education.map((edu, index)=>{
                return (
                    <div className="row mb-4" key={`edu_${index}`}>
                        <div className="col-12 h4">
                            <i className="fa fa-graduation-cap"></i> {edu.degree}
                        </div>

                        <div className="col-sm-6 pl-4">
                            <span className="form-text">
                                <i className="fa fa-university"></i> {edu.school_name}
                            </span>

                            <span className="form-text small">
                                <i className="fa fa-map-marker text-muted"></i> {edu.location}
                            </span>
                        </div>

                        <div className="col-sm-6 text-right">
                            <small className="form-text">{`${edu.start_date} - ${edu.end_date}`}</small>
                        </div>
                    </div>
                );
            })
        }

        return education;
    }

    render(){
        return (
            <div className="card">
                <h2 className="text-center mt-2 text-muted">Education</h2>
                <div className="card-body">
                    {this.setEducation()}
                </div>
            </div>
        );
    }
}

export default Education;