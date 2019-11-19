import React from 'react';

class Summary extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <h2 className="text-center mt-2 text-muted">Summary</h2>
                        <div className="card-body small" dangerouslySetInnerHTML={{__html: this.props.summary}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;