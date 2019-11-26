import React from 'react';
import Button from '../Button';
import Misc from '../Misc';

class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            limit: props.limit,
            toggleText: props.limit ? 'See More' : 'See Less'
        }
    }


    setSourceUrl = (githubLink)=>{
        if(githubLink){
            return (
                <button className="btn btn-sm btn-outline-light">
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
                <button className="btn btn-sm btn-outline-light mr-2">
                    <a className="text-white text-decoration-none" href={demoLink} target="_blank" rel="noopener noreferrer" title='Visit Site'>
                        <i className="fa fa-globe"></i> Website
                    </a>
                </button>
            );
        }
    }


    setBg = (index)=>{
        let bgs = ['#22CFC2', '#0F6BC9', '#FCC33F', '#2ECDFF', '#FF9A24', '#4D3BB7'];
        
        return bgs[index] ? bgs[index] : bgs[Math.floor(Math.random()*(bgs.length))];
    }


    setProjects = () =>{
        let projects = '';
        let projectsToShow = this.state.limit ? this.props.projects.slice(0, this.state.limit) : this.props.projects;

        if(projectsToShow){            
            projects = projectsToShow.map((project, index)=>{
                return (
                    <div className="col-md-4 mb-3" key={'project_'+index}>
                        <div className="card card-custom" style={{background:this.setBg(index)}}>
                            <div className="card-body">
                                <div className="card-custom-title">{project.name}</div>
                                <div className='text-white'>{project.description}</div>
                            </div>

                            <div className="card-footer">
                                <span className='float-left'>{this.setDemoUrl(project.site_url)}</span>

                                <span className='float-right'>{this.setSourceUrl(project.github_url)}</span>
                            </div>
                        </div>
                    </div>
                );
            })
        }

        return projects;
    }


    toggleShowAllProjects = ()=>{
        if(this.state.limit === 0){
            this.setState({limit:this.props.limit, toggleText:'See More'});

            Misc.scrollToDiv('#projects');
        }

        else{
            this.setState({limit:0, toggleText:'See Less'});
        }
    }


    render(){
        return (
            <div className='bg'>
                <div className='container pb-3'>
                    <div className="row pt-3" id='projects'>
                        <div className="col-12 section-title text-center text-white mt-5 pt-5">
                            <i className='fa fa-folder-open'></i> Projects
                        </div>
                    </div>

                    <div className="row mt-3">{this.setProjects()}</div>

                    <div className='row'>
                        <div className='col-12 text-center'>
                            <Button>
                                <span onClick={this.toggleShowAllProjects} className='text-dark text-decoration-none'>
                                    <i className='fa fa-eye'></i> <b>{this.state.toggleText}</b>
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;