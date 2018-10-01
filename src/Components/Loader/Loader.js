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
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Loader;
