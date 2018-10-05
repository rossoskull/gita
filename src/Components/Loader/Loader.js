import React from 'react';

const Loader = ({nChapters}) => {
    const preloaderStyle = {
        backgroundColor: 'rgba(0,0,0,0)',
        margin: '24% 45%'
    };

    return(
        <div className="container">
            {(nChapters===0) && (
                <div
                    className="preloader-wrapper big active"
                    style={preloaderStyle}
                >
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Loader;
