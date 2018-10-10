import React from 'react';
import './Home.css';
import { Card, CardContent, CardActionArea, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Home = ({chapters}) => {

    const ChData = chapters.map((chapter) => {
        return(
            <Grid item xs='12' md='6' >
                <Card 
                raised={true} 
                style={{ 
                    backgroundColor: '#2196f3', 
                    height: '270px',
                    color: '#FFF'
                }}
                >
                    <CardActionArea 
                        component={Link} 
                        to={`/gita/verses/${chapter.chapter_number}`} 
                        style={{height: '100%'}}
                    >
                        <CardContent>

                                <Typography 
                                    color='inherit' 
                                    variance='caption' 
                                    className="chapter-number"
                                >
                                    Chapter {chapter.chapter_number}
                                </Typography>

                                <Typography color='inherit' style={{textAlign: 'center'}} variant='display1'>
                                    {chapter.name}<br />
                                    {chapter.name_transliterated}
                                </Typography>

                                <Typography 
                                color='inherit' 
                                style={{textAlign: 'center'}}
                                >
                                    <b>{chapter.name_meaning}</b>
                                </Typography>

                                <p>{chapter.chapter_summary.substr(0, 180)}...</p>
                                <br />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    });

    return(
        <Grid container spacing={16}>
            {ChData}
        </Grid>
    );
}

export default Home;