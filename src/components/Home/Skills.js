import React from 'react';

class Skills extends React.Component{
    render(){
        return (
            this.props.skills.map((skill)=><button key={skill} className='btn btn-outline-light btn-sm skill mb-2'>{skill}</button>)
        );
    }
}

export default Skills;