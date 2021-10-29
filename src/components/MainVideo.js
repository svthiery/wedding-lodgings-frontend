function MainVideo() {
  return (
    <div className="main-video col-12">
      <video
        playsinline=""
        loop=""
        autoplay={true}
        muted=""
        id="video"
        controls
      >
        <source
          src="https://www.chateaubarthelemy.fr//wp-content/themes/wsgp/assets/video/presentation.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default MainVideo;
