import {useState, useEffect} from 'react';
import { useStateContext } from '../../HBOProvider';
import axios from 'axios';

function MediaRow({title, type}) {
    const [loadingData, setLoadingData] = useState(true);
    const [movies, setMovies] = useState([]);
    const {api_key} = useStateContext();

    const loopComp = (comp, times) => {
        let thumbnails = [];
        for(let i = 0; i < times; i++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2021&with_genres=27`)
        .then(response => {
            setLoadingData(false);
            setMovies(response.data.results);
            // console.log("Success ", response);
        })
        .catch(error => {
            console.log("Error ", error);
        })
    }, [])

    const showThumbnails = () => {
        return loadingData ? 
            loopComp(<Skeleton/>, 10) :
            movies.map(movie => {
                return <Thumbnail movieData={movie} />
            })
    }

    return (
        <div className={`media-row ${type}`}>
            <h3 className="media-row__title">{title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails()}
            </div>
        </div>
    )
}

function Thumbnail({movieData}) {
    return (
        <div className="media-row__thumbnail">
            <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt="rickmorty" />
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
