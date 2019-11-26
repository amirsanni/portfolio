import React from 'react';
import MenuItems from './MenuItems';
import Misc from './Misc';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.menuItems = [{
            title: 'Projects',
            color: '#FF9A24',
            fa: 'fa fa-folder-open'
        }, {
            title: 'Work Experience',
            color: '#F4F4F4',
            fa: 'fa fa-briefcase'
        }, {
            title: 'Education',
            color: '#2ECDFF',
            fa: 'fa fa-book'
        }, {
            title: 'Contact Me',
            color: '#FFFF00',
            fa: 'fa fa-envelope'
        }];
    }

    
    navigate = (title, e)=>{
        e.preventDefault();

        switch(title){
            case 'Contact Me':
                window.location.href='mailto:amirsanni@gmail.com';
                break;

            case 'Projects':
                Misc.scrollToDiv('#projects');
                break;

            case 'Work Experience':
                Misc.scrollToDiv('#experience');
                break;

            case 'Education':
                Misc.scrollToDiv('#education');
                break;

            default:
                //do nothing
                
        }
    }


    render(){
        return (
            <div className='bg'>
                <div className='container'>
                    <div className='row navbar-container'>
                        <div className='col-md-4 my-name'>
                            Amir Sanni
                        </div>

                        <div className='col-md-8 menu'>
                            {this.menuItems.map((menu)=><MenuItems key={menu.title} menu={menu} navigate={this.navigate} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;