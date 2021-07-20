function PosterView() {
    const loopComp = (comp, times) => {
        let thumbnails = [];
        for(let i = 0; i < times; i++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="poster-view">
            <h3 className="poster-view__title">Movies</h3>
            <div className="poster-view__thumbnails">
                {loopComp(
                    <div className="poster-view__thumbnail">
                        <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="rickmorty" />
                        <div className="poster-view__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 10
                   
                )}
            </div>
        </div>
    )
}

export default PosterView
