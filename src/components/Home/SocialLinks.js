import React from 'react';

class SocialLinks extends React.Component{
    render(){
        return (
            this.props.socials.map((soc, index)=>{
                return(
                    <a key={'soc_'+index} className="social-icon text-center text-decoration-none" href={soc.url} title={soc.name} target="_blank" rel="noopener noreferrer">
                        <i className={soc.fa}></i>
                    </a>
                );
            })
        );
    }
}

export default SocialLinks;