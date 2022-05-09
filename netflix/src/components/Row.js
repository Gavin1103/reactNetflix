import { useState } from "react";
import VerderKijkenRow from "./VerderKijken";
import Genre from "./GenreTitle";
import InnerRow from "./InnerRow";






function Row() {

    const [MovieInfo, ShowMovieInfo] = useState(false);
    let movieInfoContainer;

    if (MovieInfo) {
        movieInfoContainer = <div className="movieInfoContainer">
            <div onClick={() => ShowMovieInfo(false)} className="movieInfo_OuterContainer"></div>
            <div id="movieInfoInnerContainerMiddle">

                <div className="videoBackground">
                    <a href="/video"><div className="playVideo"></div></a>
                </div>

                <h2>Grand Theft Auto</h2>
                <div className="videoInfoContainer">
                    <div className="videoInfo">Nieuw</div>
                    <div className="videoInfo">16</div>
                    <div className="videoInfo">2 uur en 1 min</div>
                    <div className="videoInfo">HD</div>
                    <div className="videoInfo">5.1</div>
                </div>
                {/* <video id="playFilm" controls>
                    <source src={video} type="video/mp4" />
                </video> */}
                <div className="videoTekst">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eveniet corporis omnis esse. Totam tempore velit voluptas numquam expedita veniam.</div>



                {/* 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kBsNvGyfM8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            </div>
            <div onClick={() => ShowMovieInfo(false)} className="movieInfo_OuterContainer"></div>
        </div>
    }
    return (
        <div className="rowAllContainer">
            {/* <InnerRow name="Horror" /> */}
            <div className="rowOuterContainer">
                {/* <div className="genreTitle"><h5>Genre</h5></div> */}
                <Genre name="thriller" />
                <div className="rowContainer">
                    <div className="rowInnerContainer">
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                    </div>
                </div>
            </div>
            <div className="rowOuterContainer">
                <Genre name="Actie" />
                <div className="rowContainer">
                    <div className="rowInnerContainer">
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                    </div>
                </div>
            </div>
            <VerderKijkenRow />
            <div className="rowOuterContainer">
                <Genre name="thriller" />
                <div className="rowContainer">
                    <div className="rowInnerContainer">
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                    </div>
                </div>
            </div>
            <div className="rowOuterContainer">
                <Genre name="thriller" />
                <div className="rowContainer">
                    <div className="rowInnerContainer">
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                    </div>
                </div>
            </div>
            <div className="rowOuterContainer">
                <Genre name="thriller" />
                <div className="rowContainer">
                    <div className="rowInnerContainer">
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                    </div>
                </div>
            </div>
            <div className="rowOuterContainer">
                <Genre name="thriller" />
                <div className="rowContainer">
                    <div className="rowInnerContainer">
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                        <div onClick={() => ShowMovieInfo(!MovieInfo)} className="row"></div>
                    </div>
                </div>
            </div>
            {movieInfoContainer}
        </div>

    );
}

export default Row;
