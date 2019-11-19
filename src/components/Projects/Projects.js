import React from 'react';

class Projects extends React.Component{
    setGithubUrl = (githubLink)=>{
        if(githubLink){
            return (
                <button className="btn btn-sm btn-secondary">
                    <a className="text-white text-decoration-none" href={githubLink} target="_blank" rel="noopener noreferrer" title='Source Code'>
                        <i className="fa fa-github"></i> Source Code
                    </a>
                </button>
            );
        }
    }

    setDemoUrl = (demoLink) => {
        if(demoLink){
            return (
                <button className="btn btn-sm btn-secondary mr-2">
                    <a className="text-white text-decoration-none" href={demoLink} target="_blank" rel="noopener noreferrer" title='Visit Site'>
                        <i className="fa fa-globe"></i> Visit Site
                    </a>
                </button>
            );
        }
    }


    setProjects = () =>{
        let projects = '';

        if(this.props.projects){
            projects = this.props.projects.map((project, index)=>{
                return (
                    <div className="col-md-4 mb-3" key={'project_'+index}>
                        <div className="card card-height">
                            <div className="card-body">
                                <div className="text-center h4">{project.name}</div>
                                <div className="small">{project.description}</div>
                            </div>

                            <div className="card-footer text-center footer-height">
                                {this.setDemoUrl(project.site_url)}

                                {this.setGithubUrl(project.github_url)}
                            </div>
                        </div>
                    </div>
                );
            })
        }

        return projects;
    }


    render(){
        return (
            <div>
                <div className="row banner">
                    <div className="col-12 h2 mt-5 pt-5 text-center">
                        <blockquote className="text-uppercase">Code Don't Lie, Comments Sometimes Do</blockquote>
                        - Ron Jeffries
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12 h2 text-center text-white">My Projects</div>
                </div>

                <div className="row mt-3">{this.setProjects()}</div>
            </div>
        )
    }
}

export default Projects;