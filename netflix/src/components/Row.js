import { useState } from "react";
import VerderKijkenRow from "./VerderKijken";
import Genre from "./GenreTitle";
import InnerRow from "./InnerRow";


function Row() {

    const [MovieInfo, ShowMovieInfo] = useState(false);
    let movieInfoContainer;

    if (MovieInfo) {
        movieInfoContainer = <div className="movieInfoContainer">
            <div onClick={() => ShowMovieInfo(false)} className="movieInfo_OuterContainer">

            </div>
            <div id="movieInfoInnerContainerMiddle">

            </div>
            <div onClick={() => ShowMovieInfo(false)} className="movieInfo_OuterContainer">

            </div>
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
