import React from 'react'

const withHover =(OriginalComponent) => (props)=>{
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
                        cetagory = {props.cetagory}
                        hoverEffect={hoverEffect}
                        onHover={this.onHover}
                        isHover={isHover}
                        onWithoutHover={this.onWithoutHover}
                    />
        }

    }

    return <NewComponent {...props}/>;
}

export default withHover;