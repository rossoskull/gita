import React, { Component } from 'react';

class Verses extends Component {
    


    render() {
        return(
            <div>
                <h3>Verses : {this.props.match.params.ch}</h3>
            </div>            
        );
    }
}

export default Verses;