// const video = require("../videos/video.mp4");

function Video() {
    return (
        <video id="playFilm" controls>
            {/* <source src={video} type="video/mp4" /> */}
            <source src="http://u533187.gluweb.nl/videos/video.html" type="video/mp4" />
        </video>
    );
}

export default Video;