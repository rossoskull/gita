import React from 'react';
import { CircularProgress} from '@material-ui/core'

const Loader = ({nChapters}) => {
    const preloaderStyle = {
        backgroundColor: 'rgba(0,0,0,0)',
        margin: '24% 45%',
        color: '#2196f3' 
    };

    return(
        <div className="container">
            {(nChapters===0) && (
                <CircularProgress size={65} style={preloaderStyle} />
            )}
        </div>
    );
};

export default Loader;
