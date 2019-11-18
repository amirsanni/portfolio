import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery';
import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import * as serviceWorker from './serviceWorker';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            portfolioData: {},
            activeComponent: '',
            currentUri: '',
            apiUrl: 'https://amirsanni.com/api.php'
        }
    }


    componentDidMount = ()=>{
        fetch(this.state.apiUrl+'?get=portfolio', {
            mode:'cors'
        }).then((res)=>{
            if(res.ok){
                return res.json();
            }

            throw new Error('Unable to process your request');
        }).then((response)=>{
            this.setState({
                portfolioData:response.data
            });

            this.setInitialComponent();
        }).catch((e)=>{
            console.error(e);
        });
    }


    setInitialComponent = ()=>{
        let uri = window.location.pathname;

        this.changeComponent(uri);
    }
  
    
    navigate(path, e){
        e.preventDefault();

        this.changeComponent(path);
    }


    changeComponent = (path)=>{
        let newComponent = '';
        let pageTitle = '';

        switch(path){
            case '/projects':
                newComponent = <Projects projects={this.state.portfolioData.projects} />;
                pageTitle = 'Projects';
                break;

            default:
                newComponent = <Home data={this.state.portfolioData} />;
                pageTitle = 'Home';
                break;
        }

        this.setState({activeComponent: newComponent, currentUri:path});

        window.history.pushState({pageTitle:pageTitle}, '', window.location.origin+path);
    }


    makeActive = (uri)=>{
        return uri === this.state.currentUri ? 'active' : '';
    }

  
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href='/' onClick={this.navigate.bind(this, '/home')}>Welcome</a>
                    <button className="navbar-toggler btn bg-secondary" type="button" data-toggle="collapse" data-target="#navbarMenuItems" aria-controls="navbarMenuItems" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars text-white"></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarMenuItems">
                        <ul className="navbar-nav">
                            <li className="nav-item custom-nav-item">
                                <a className={`nav-link ${this.makeActive('/home')}`} href="/" onClick={this.navigate.bind(this, '/home')}>Home</a>
                            </li>

                            <li className="nav-item custom-nav-item">
                                <a className={`nav-link ${this.makeActive('/projects')}`} href="projects" onClick={this.navigate.bind(this, '/projects')}>Projects</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid mb-3">
                    {this.state.activeComponent}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
