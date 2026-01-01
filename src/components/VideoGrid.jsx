import VideoCard from "./VideoCard";

function VideoGrid() {
  return (
    <div className="content">
      <h3>Recommended</h3>

      <div className="grid">
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
          title="React JS Full Course for Beginners"
          channel="Programming with Mosh"
          views="2.3M views • 1 year ago"
        />

        <VideoCard
          thumbnail="https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg"
          title="CSS Flexbox in 20 Minutes"
          channel="Traversy Media"
          views="1.1M views • 10 months ago"
        />

        <VideoCard
          thumbnail="https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg"
          title="JavaScript Tutorial for Beginners"
          channel="Academind"
          views="3M views • 2 years ago"
        />
      </div>
    </div>
  );
}

export default VideoGrid;
