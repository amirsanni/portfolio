import React from 'react';

class Button extends React.Component{
    render(){
        return (
            <button className='btn app-btn rounded-0'>
                {this.props.children}
            </button>
        );
    }
}

export default Button;