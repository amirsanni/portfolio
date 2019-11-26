import React from 'react';

class Loading extends React.Component{
    render(){
        return (
            <div className='container mt-5 pt-5'>
                <div className='row mt-5 pt-5'>
                    <div className='col-12 text-center'>
                        <div className="spinner-border text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;