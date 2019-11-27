import React from 'react';

class Skills extends React.Component{
    render(){
        return (
            this.props.skills.map((skill)=>
                <button key={skill.name} className='btn btn-outline btn-sm skill mb-2 no-hover' title={skill.url}>
                    <a href={skill.url} className='text-decoration-none text-white' target='_blank' rel='noopener noreferrer'>{skill.name}</a>
                </button>
            )
        );
    }
}

export default Skills;