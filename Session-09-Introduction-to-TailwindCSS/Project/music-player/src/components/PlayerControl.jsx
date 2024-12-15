import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";

const PlayerControls = ({ isPlaying, playPauseHandler, skipSongHandler }) => {

return (

        <div className="flex justify-center items-center space-x-6">

            <button
                className="text-3xl p-3 rounded-full hover:bg-gray-700"
                onClick={() => skipSongHandler(-1)}
            >
                <RxTrackPrevious />
            </button>

            <button
                className="text-3xl p-3 rounded-full hover:bg-gray-700"
                onClick={playPauseHandler}
            >
                {isPlaying ? "Pause" : "Play"}
            </button>

            <button
                className="text-3xl p-3 rounded-full hover:bg-gray-700"
                onClick={() => skipSongHandler(1)}
            >
                <RxTrackNext />
            </button>

        </div>

    );

};
  
export default PlayerControls;