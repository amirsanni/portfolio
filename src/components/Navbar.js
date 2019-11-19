import React from 'react';

class Navbar extends React.Component{
    makeActive = (uri)=>{
        return uri === this.props.currentUri ? 'active' : '';
    }  
    
    navigate = (e)=>{
        e.preventDefault();

        let pathnameArr = e.target.href.split('/');

        let path = '/' + pathnameArr[pathnameArr.length - 1];

        this.props.changeComponent(path);
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href='/home' onClick={this.props.navigate}>Welcome</a>
                <button className="navbar-toggler btn bg-secondary" type="button" data-toggle="collapse" data-target="#navbarMenuItems" aria-controls="navbarMenuItems" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars text-white"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarMenuItems">
                    <ul className="navbar-nav">
                        <li className="nav-item custom-nav-item">
                            <a className={`nav-link ${this.makeActive('')}`} href="/home" onClick={this.navigate}>Home</a>
                        </li>

                        <li className="nav-item custom-nav-item">
                            <a className={`nav-link ${this.makeActive('/projects')}`} href="projects" onClick={this.navigate}>Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;