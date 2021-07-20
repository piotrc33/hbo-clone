function JustAdded() {
    const loopComp = (comp, times) => {
        let thumbnails = [];
        for(let i = 0; i < times; i++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="just-added">
            <h3 className="just-added__title">Just Added</h3>
            <div className="just-added__thumbnails">
                {loopComp(
                    <div className="just-added__thumbnail">
                        <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="rickmorty" />
                        <div className="just-added__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 10
                   
                )}
            </div>
        </div>
    )
}

export default JustAdded
