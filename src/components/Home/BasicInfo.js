import React from 'react';

class BasicInfo extends React.Component{
    constructor(props){
        super(props);
    }

    getSocialLinks = ()=>{
        let socialLinks = '';

        if(this.props.basicInfo && this.props.basicInfo.social.length){
            socialLinks = this.props.basicInfo.social.map((soc, index)=>{
                return(
                    <a key={'soc_'+index} className="pr-2 text-secondary text-decoration-none" href={soc.url} title={soc.name} target="_blank" rel="noopener noreferrer">
                        <i className={soc.fa}></i>
                    </a>
                );
            });
        }
        
        return socialLinks;
    }


    render(){
        return (
            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <img className="card-img-top" src={this.props.basicInfo.img_url} alt="GitHub Avatar" />

                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col-12 h4">Amir Sanni</div>
                                <div className="col-12 small text-muted">Software Engineer</div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-12 text-center">{this.getSocialLinks()}</div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 text-center small">
                                    <blockquote>{this.props.basicInfo.quote}</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicInfo;