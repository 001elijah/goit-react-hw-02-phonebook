import { Component } from "react";

class Filter extends Component {
    state = {
        query: ''
    }

    handleInput = evt => {
        this.setState({query: evt.target.value});
        this.props.onChangeProp(evt.target.value);
    };
    
    render() {
        return (
            <label htmlFor="">
                Find contacts by name
                <input type="text" onChange={this.handleInput}/>
            </label>
        );
    }; 

};

export default Filter;