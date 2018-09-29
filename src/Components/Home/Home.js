import React from 'react';
import './Home.css';

const Home = ({chapters}) => {
    const chToView = chapters.filter((chapter) => {
        return true;
    });

    const ChData = chToView.map((chapter) => {
        return(
            <div className="col s12 m6">
                <div className="card home-card blue darken-1 waves-effect waves-light">
                    <div className="card-content white-text">
                        <span className="card-title">
                            {chapter.name} - 
                            {chapter.name_transliterated}
                        </span>
                            <p><b>{chapter.name_meaning}</b></p>
                            <p>{chapter.chapter_summary.substr(0, 180)}...</p>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="row">
            {ChData}
        </div>
    );
}

export default Home;