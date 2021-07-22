import {useState} from 'react';

function MediaRow({title, type}) {
    const [loadingData, setLoadingData] = useState(true);

    const loopComp = (comp, times) => {
        let thumbnails = [];
        for(let i = 0; i < times; i++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }

    const showThumbnails = () => {
        setTimeout(() => setLoadingData(false), 3000);
        return loopComp(loadingData ? <Skeleton/> : <Thumnail />, 10);
    }

    return (
        <div className={`media-row ${type}`}>
            <h3 className="media-row__title">{title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails()}
                {/* <Skeleton /> */}
                {/* {loopComp(
                    <div className="media-row__thumbnail">
                        <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="rickmorty" />
                        <div className="media-row__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 10
                   
                )} */}
            </div>
        </div>
    )
}

function Thumnail() {
    return (
        <div className="media-row__thumbnail">
            <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="rickmorty" />
            <div className="media-row__top-layer">
                <i className="fas fa-play" />
            </div>
        </div>
    )
}

function Skeleton() {
    return (
        <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img">

            </div>
        </div>
    )
}


export default MediaRow
