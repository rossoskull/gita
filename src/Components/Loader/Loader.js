import React from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core'

const Loader = ({type}) => {
    const preloaderStyle = {
        backgroundColor: 'rgba(0,0,0,0)',
        margin: '24% 45%',
        color: '#2196f3' 
    };

    return(
        <div className="container">
            {( type==='circle' ) ? (
                <CircularProgress size={65} style={preloaderStyle} />
            ) : (
                <LinearProgress />
            )}
        </div>
    );
};

export default Loader;
