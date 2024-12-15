const MusicPlayer = ({ currentSong }) => {

    if (!currentSong) return null;

    return (

        <div className="text-center mb-6">
            <h2 className="text-xl font-medium">{currentSong.title}</h2>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
        </div>

    );

};

export default MusicPlayer;  