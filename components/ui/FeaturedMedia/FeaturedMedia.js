// import YouTube from "react-youtube";
import { useRouter } from "next/router";

function FeaturedMedia({ mediaUrl, title, location, type, linkUrl }) {
  const router = useRouter();

  const handlePlay = () => {
    router.push(linkUrl)
    console.log("send user to movie page");
  };

  const showMedia = () => {
    if (type === "video") {
      return (
        <iframe
          className="featured-media__trailer"
          width="100%"
          height="100%"
          src={`${mediaUrl}?controls=0&amp;start=5&autoplay=0&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
    if (type === "poster") {
      return <img className="featured-media__poster" src={mediaUrl} alt="" />;
    }
  };

  return (
    <div className="featured-media">
      {showMedia()}

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">{title}</div>
          <div
            className={`featured-media__playing ${
              type === "poster" ? "hidden" : ""
            }`}
          >
            NOW PLAYING
          </div>
          <div
            className={`featured-media__location ${
              type === "poster" ? "hidden" : ""
            }`}
          >
            {location}
          </div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={handlePlay}>
              <i className="fas fa-play" />
            </div>
            <div
              className={`featured-media__info-btn ${
                type === "poster" ? "hidden" : ""
              }`}
              onClick={handlePlay}
            >
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMedia;
