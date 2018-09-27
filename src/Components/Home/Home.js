import React, { Component } from 'react';

class Home extends Component {
    state = {
        acc_token: "",
    }

    componentWillReceiveProps(newprops) {
        this.setState({
            acc_token: newprops.acc_token,
        })
    } 

    render() {
        return(
            <div>
            </div>
        );
    }
}

export default Home;