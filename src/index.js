import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery';
import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import * as serviceWorker from './serviceWorker';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            portfolioData: {},
            activeComponent: <Loading />,
            currentUri: ''
        }
        this.apiUrl = process.env.REACT_APP_API_URL;
        this.appRoot = process.env.REACT_APP_APP_ROOT
    }

    componentDidMount = ()=>{
        fetch(this.apiUrl+'?get=portfolio', {
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


    changeComponent = (path)=>{
        let newComponent = '';
        let pageTitle = '';
        let uri = '';

        switch(path){
            case '/projects':
                newComponent = <Projects projects={this.state.portfolioData.projects} />;
                pageTitle = 'Projects';
                uri = path;
                break;

            default:
                newComponent = <Home data={this.state.portfolioData} />;
                pageTitle = 'Home';
                uri = '';
                break;
        }

        this.setState({activeComponent: newComponent, currentUri:uri});

        this.changeUrl(uri, pageTitle);
    }


    changeUrl = (path, pageTitle)=>{
        window.history.pushState({pageTitle:pageTitle}, '', this.appRoot+path);
    }

  
    render(){
        return (
            <React.Fragment>
                <Navbar />
                {this.state.activeComponent}
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
