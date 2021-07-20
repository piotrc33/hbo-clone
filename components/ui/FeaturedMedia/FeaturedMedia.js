import YouTube from "react-youtube";

function FeaturedMedia() {

    return (
        
        <div className="featured-media">
            
            {/* <iframe className="featured-media__trailer" 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/HN4oydykJFc?controls=0&amp;start=5&autoplay=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe> */}

            <YouTube 
                videoId="HN4oydykJFc"
                className="featured-media__trailer"
                opts={{
                    width: "100%",
                    height: "100%",
                    autoplay: 1,
                    controls: 0,
                    start: 15,
                    loop: 1,
                    mute: 1
                }}
            />
            
            
            <div className="featured-media__bg">
                <div className="featured-media__container">
                    <div className="featured-media__title">
                        Better Call Saul
                    </div>
                    <div className="featured-media__playing">
                        NOW PLAYING
                    </div>
                    <div className="featured-media__location">
                        In theaters and on HBO MAX
                    </div>
                    <div className="featured-media__buttons">
                        <div className="featured-media__play-btn">
                            <i className="fas fa-play" />
                        </div>
                        <div className="featured-media__info-btn">
                            MORE INFO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMedia
