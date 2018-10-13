import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

const Chapter = ({chapter}) => {
    
    console.log(chapter);
    return(
        <div>
            {chapter && (
                <Card style={{backgroundColor: '#2196f3', color:'white', marginBottom: '20px'}}>
                    <CardContent color='inherit'>
                        <Typography color='inherit' variant='body1' align='center'>
                            Chapter {chapter.chapter_number}
                        </Typography>

                        <Typography color='inherit' variant='display3' align='center'>
                            {chapter.name}
                        </Typography>

                        <Typography color='inherit' variant='display1' align='center'>
                            {chapter.name_translation}
                        </Typography>

                        <Divider style={{ width: '80%', margin: '15px auto', backgroundColor: 'rgba(255,255,255, 0.4)'}} />

                        <Typography color='inherit' variant='headline' align='center'>
                            Summary 
                        </Typography>

                        <Typography color='inherit' style={{fontSize: '16px'}} align='left'>
                            {chapter.chapter_summary}
                        </Typography>
                    </CardContent>
                </Card>
            )}                        
        </div>
    );
};

export default Chapter;

