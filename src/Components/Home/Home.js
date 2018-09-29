import React, { Component } from 'react';

class Home extends Component {
    state = {
        acc_token: "",
        chapters: [],
        chToView: [],
        search: ' ',
    }

    componentWillReceiveProps(newprops) {
        if (newprops.acc_token !== '') {
            const scope = this;
            console.log('component recieved props...');
            this.updateToken(newprops)
            .then((c) => {
                console.log(c);
                scope.getChapters();
            })
        }
    }

    updateToken = (newprops) => {
        return new Promise((resolve, reject) => {
            this.setState({
                acc_token: newprops.acc_token,
            });
            resolve(true);
        });
    }

    getChapters = () => {
        const scope = this;
        const token = this.state.acc_token;
        const url = `https://bhagavadgita.io/api/v1/chapters?access_token=${token}`;
        const options = {
            'mode': 'cors',
        }
        fetch(url, options)
        .then((res) => {
            if(res.ok) {
                 res.json().then((data) => {
                    console.log('printing data');
                    console.log(data);
                    this.setState({
                        chapters: data,
                    });
                    scope.showChapters(' ');
                    return;
                 });
            } else {
                console.log('Error in retrieving chapters');
            }
        })
        .catch((err) => {
            console.log('Chapters error', err);
        });
    }

    showChapters = (srch) => {
        const ch = this.state.chapters.filter((chapter) => {
            if(srch === ' '){
                return true;
            } else {
                return false;
            }
        });

        const mappedCh = ch.map((chapter) => {
            return(
                <h4>{chapter.name}, verses = {chapter.verses_count}</h4>
            );
        });

        this.setState({
            chToView: mappedCh,
        });

        return 1;
    }

    render() {
        return(
            <div>
                <h3>Chapters of Bhagwada Gita</h3>
                <div>
                    {this.state.chToView}
                </div>
            </div>
        );
    }
}

export default Home;