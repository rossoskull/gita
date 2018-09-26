import React, { Component } from 'react';

class Home extends Component {
    state = {
        name: "Jay"
    }

    render() {
        return(
            <div>
                {this.state.name}                
            </div>
        );
    }
}

export default Home;