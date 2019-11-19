import React from 'react';

class Skills extends React.Component{
    constructor(props){
        super(props);
    }

    setSkills = () => {
        let skills = '';

        if(this.props.skills.length){
            skills = this.props.skills.map((skill, index)=>{
                return <button key={'skill_'+index} className="btn btn-light btn-sm mb-2 mr-2">{skill}</button>;
            })
        }

        return skills;
    }


    render(){
        return (
            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <h2 className="text-center mt-2 text-muted">Skills</h2>
                        <div className="card-body">{this.setSkills()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;