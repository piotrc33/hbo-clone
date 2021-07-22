

function MediaRow({title, type}) {
    const loopComp = (comp, times) => {
        let thumbnails = [];
        for(let i = 0; i < times; i++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className={`media-row ${type}`}>
            <h3 className="media-row__title">{title}</h3>
            <div className="media-row__thumbnails">
                {loopComp(
                    <div className="media-row__thumbnail">
                        <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="rickmorty" />
                        <div className="media-row__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 10
                   
                )}
            </div>
        </div>
    )
}

export default MediaRow
