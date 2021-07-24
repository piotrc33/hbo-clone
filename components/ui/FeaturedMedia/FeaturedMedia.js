// import YouTube from "react-youtube";

function FeaturedMedia({ videoUrl, title, location }) {
  const handlePlay = () => {
    console.log("send user to movie page");
  };

  return (
    <div className="featured-media">
      <iframe
        className="featured-media__trailer"
        width="100%"
        height="100%"
        src={`${videoUrl}?controls=0&amp;start=5&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">{title}</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">{location}</div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={handlePlay}>
              <i className="fas fa-play" />
            </div>
            <div className="featured-media__info-btn" onClick={handlePlay}>MORE INFO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMedia;
