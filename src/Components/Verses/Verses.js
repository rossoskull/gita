import React, { Component } from 'react';
import { Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

class Verses extends Component {

    state = {
        verses: null,
        chapter: null,
        expanded: ''
    }

    render() {

        const styles = {
            hr: {
                backgroundColor: 'rgba(255,255,255,0.5)',
                width: '85%',
                margin: '0 auto',
                marginBottom: '8px'
            },

            expansionPanel: {
                marginBottom: '5px',
                backgroundColor: '#2196f3',
                color: 'white'
            }
        }

        const { ch, acc_token} = this.props;

        if ( this.state.chapter !== this.props.chapters[ch] ) {
            this.setState({
                chapter: this.props.chapters[ch]
            })
        }

        if ( this.state.verses == null ) {
            const baseUrl = 'https://bhagavadgita.io/api/v1/';
            const url = `${baseUrl}chapters/${ch}/verses?access_token=${acc_token}`;
            const options = {
                'mode': 'cors',
            }

            // Fetch Verses from the desired chapter
            fetch(url, options)
            .then((res) => {
                if(res.ok) {
                    res.json().then((data) => {
                        const versesData = data.map((verse) => {
                            return(
                                <ExpansionPanel style={styles.expansionPanel}>
                                    <ExpansionPanelSummary 
                                        expandIcon={
                                            <ExpandMore style={{color: 'white'}} />
                                        }
                                    >
                                        <Typography variant='h5' color='inherit'>
                                            {verse.text}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{display: 'block'}} >
                                            <Typography gutterBottom style={{width: '100%'}} variant='subtitle2' color='inherit'>
                                                &raquo; Transliteration  
                                            </Typography>

                                            <Typography gutterBottom color='inherit' variant='h6' >
                                                {verse.transliteration}
                                            </Typography>
                                            <Divider style={styles.hr}/>
                                            
                                            <Typography gutterBottom variant='subtitle2' color='inherit'>
                                                &raquo; Meaning    
                                            </Typography>
                                            
                                            <Typography gutterBottom color='inherit' variant='h6' >
                                                {verse.meaning}
                                            </Typography>
                                            <Divider style={styles.hr}/>
                                            
                                            <Typography gutterBottom variant='subtitle2' color='inherit'>
                                                &raquo; Word Meanings    
                                            </Typography>
                                            
                                            <Typography gutterBottom color='inherit' variant='h6' >
                                                {verse.word_meanings}
                                            </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            );
                        });
                        this.setState({ verses: versesData });
                    });
                } else {
                    console.log('Error in retrieving verses');
                }
            })
            .catch((err) => {
                console.log('verses error', err);
            });
        }

        return(
            <div>
                {this.state.verses}
            </div>                     
        );
    }
}

export default Verses;
