function VideoCard({ thumbnail, title, channel, views }) {
  return (
    <div className="card">
      <div className="thumbnail-wrapper">
        <img src={thumbnail} alt="video thumbnail" />
      </div>

      <h4>{title}</h4>
      <p className="channel">{channel}</p>
      <p className="views">{views}</p>
    </div>
  );
}

export default VideoCard;
