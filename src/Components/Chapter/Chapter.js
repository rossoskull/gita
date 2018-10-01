import React from 'react';

const Chapter = ({chapter, chId}) => {
    return(
        <div>
            <div id={chId} class="modal blue modal-fixed-footer">
                <div class="modal-content white-text">
                <h3 style={{textAlign: 'center'}}>{chapter.chapter_number}. {chapter.name}</h3>
                <h5 style={{textAlign: 'center'}}>{chapter.name_transliterated} - {chapter.name_translation}</h5>
                <h6>Summary : </h6>
                <p>{chapter.chapter_summary}</p>
                </div>
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </div>
    );
};

export default Chapter;

