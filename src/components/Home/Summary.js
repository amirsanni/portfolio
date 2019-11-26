import React from 'react';

class Summary extends React.Component{
    render(){
        return (
            <React.Fragment>
                <span dangerouslySetInnerHTML={{__html:this.props.summary}}></span>
            </React.Fragment>
        );
    }
}

export default Summary;