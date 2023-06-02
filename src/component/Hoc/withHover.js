import React from 'react'

const withHover =(OriginalComponent) =>{
    class NewComponent extends React.Component{
        state = {
            relatedBlogCard : ""
        };

        onHover = () =>{
            this.setState({relatedBlogCard:"relatedblog-card-hover"})
        }

        onWithoutHover = () =>{
            this.setState({relatedBlogCard:"relatedblog-card"})
        }

        render(){
            const {relatedBlogCard} = this.state;
            return <OriginalComponent
                        relatedBlogCard={relatedBlogCard}
                        onHover={this.onHover}
                        onWithoutHover={this.onWithoutHover}
                    />
        }

    }

    return NewComponent;
}

export default withHover;