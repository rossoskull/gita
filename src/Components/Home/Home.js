import React from 'react';
import './Home.css';
import Chapter from '../Chapter/Chapter';

const Home = ({chapters, currentPage, updatePage}) => {
    const chToView = chapters.filter((chapter) => {
        return true;
    });

    const enableModal = () => {
        const script = document.createElement('script');
        script.innerHTML = `
            $('.modal').modal(); 
        `;
        document.body.appendChild(script);
        console.log('Hello Hello Hello Hello Hello Hello ')
        updatePage('home');
    }

    const ChData = chToView.map((chapter) => {
        const chId = `ch-${chapter.chapter_number}`;
        return(
            <div className="col s12 m6">
                <a href={"#"+chId} className="modal-trigger" >
                    <div className="card home-card blue darken-1 waves-effect waves-light">
                        <div className="card-content white-text">
                            <p className="chapter-number">Chapter {chapter.chapter_number}</p>
                            <span className="card-title">
                                {chapter.name} - 
                                {chapter.name_transliterated}
                            </span>
                            <p><b>{chapter.name_meaning}</b></p>
                            <p>{chapter.chapter_summary.substr(0, 180)}...</p>
                            <br />
                        </div>
                    </div>
                </a>
                <Chapter chapter={chapter} chId={chId} />
            </div>
        )
    });

    return(
        <div className="row home-container">
            {ChData}
            {(currentPage !== 'home')? enableModal() : console.log('Updated')}
        </div>
    );
}

export default Home;