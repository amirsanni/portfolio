import React from 'react';

class Education extends React.Component{
    setEducation = ()=>{
        let education = '';

        if(this.props.education.length){
            education = this.props.education.map((edu, index)=>{
                return (
                    <div className="col-md-4 offset-1 mb-3" key={`edu_${index}`}>
                        <span>
                            <img src={process.env.REACT_APP_ASSET_URL+edu.logo} style={{'height':'150px'}} className='img-fluid float-left' alt={edu.school_name} />
                        </span>
                        
                        <span className='pl-5 ml-5'>
                            <div className='degree-name'>{edu.degree}</div>
                            <div className='duration'>{edu.end_date}</div>
                            <div className='school-name'>{edu.school_name}, {edu.location}</div>
                        </span>
                    </div>
                );
            })
        }

        return education;
    }

    render(){
        return (
            <div className='bg'>
                <div className='container'>
                    <div className='row' id='education'>
                        <div className="col-12 section-title text-center mt-5 mb-5" style={{color: '#2ECDFF'}}>
                            <i className='fa fa-book'></i> Education
                        </div>
                    </div>

                    <div className='row pb-4'>
                        {this.setEducation()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;