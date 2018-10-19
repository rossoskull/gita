import React, { Component } from 'react';
import Chapter from '../Chapter/Chapter';
import { Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Loader from '../Loader/Loader';

class Verses extends Component {

    state = {
        verses: null,
        chapter: {},
        loading: true,
    }

    render() {

        // Styles
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

        // Props
        const { chapters, ch, acc_token} = this.props;

        // Set the chapter state to current chapter
        if ( this.state.chapter !== chapters[ch-1] ) {
            this.setState({
                chapter: chapters[ch-1],
                loading: true,
            })
        }

        // Retrieve the verses for the current chapter
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
                        this.setState({ loading: false, verses: versesData });
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
                { this.state.chapter === this.props.chapters[ch-1] && (
                    <Chapter chapter={this.state.chapter} />
                )}
                {this.state.verses}
                {this.state.loading && (<Loader type='bar'/>)}
            </div>                     
        );
    }
}

export default Verses;
