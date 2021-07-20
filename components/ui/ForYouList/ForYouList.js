function ForYouList() {
    const loopComp = (comp, times) => {
        let thumbnails = [];
        for(let i = 0; i < times; i++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                {loopComp(
                    <div className="foryou-list__thumbnail">
                        <img src="https://static.posters.cz/image/1300/plakaty/rick-morty-portal-i86752.jpg" alt="rickmorty" />
                        <div className="foryou-list__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 10
                   
                )}
            </div>
        </div>
    )
}

export default ForYouList
