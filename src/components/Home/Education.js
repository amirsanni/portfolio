import React from 'react';

class Education extends React.Component{
    setEducation = ()=>{
        let education = '';

        if(this.props.education.length){
            education = this.props.education.map((edu, index)=>{
                return (
                    <div class="row mb-4" key={`edu_${index}`}>
                        <div class="col-12 h4">
                            <i class="fa fa-graduation-cap"></i> {edu.degree}
                        </div>

                        <div class="col-sm-6 pl-4">
                            <span class="form-text">
                                <i class="fa fa-university"></i> {edu.school_name}
                            </span>

                            <span class="form-text small">
                                <i class="fa fa-map-marker text-muted"></i> {edu.location}
                            </span>
                        </div>

                        <div class="col-sm-6 text-right">
                            <small class="form-text">{`${edu.start_date} - ${edu.end_date}`}</small>
                        </div>
                    </div>
                );
            })
        }

        return education;
    }

    render(){
        return (
            <div class="card">
                <h2 class="text-center mt-2 text-muted">Education</h2>
                <div class="card-body">
                    {this.setEducation()}
                </div>
            </div>
        );
    }
}

export default Education;