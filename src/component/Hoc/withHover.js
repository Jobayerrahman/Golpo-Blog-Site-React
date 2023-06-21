import React from 'react'

const withHover =(OriginalComponent) =>{
    class NewComponent extends React.Component{
        state = {
            hoverEffect : "",
            isHover         : ""
        };

        onHover = () =>{
            this.setState({hoverEffect:"onHover",isHover: true})
        }

        onWithoutHover = () =>{
            this.setState({hoverEffect:"", isHover: false})
        }

        render(){
            const {hoverEffect,isHover} = this.state;
            return <OriginalComponent
                        hoverEffect={hoverEffect}
                        onHover={this.onHover}
                        isHover={isHover}
                        onWithoutHover={this.onWithoutHover}
                    />
        }

    }

    return NewComponent;
}

export default withHover;