import React, {Component} from 'react';


class MenuItems extends Component{
    render(){
        return (
            <span className='menu-item' style={{'color':this.props.menu.color}} onClick={this.props.navigate.bind(this, this.props.menu.title)}>
                <i className={this.props.menu.fa}></i>{' '} {this.props.menu.title}
            </span>
        );
    }
}

export default MenuItems;