const SongList = ({ songs, onSongSelect }) => {

return (

        <div className="mb-6">

            <h2 className="text-2xl font-semibold mb-4">Song List</h2>

            <ul className="space-y-4">
                {songs.map((song) => (
                <li
                    key={song.id}
                    className="flex justify-between items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
                    onClick={() => onSongSelect(song)}
                >
                    <span>{song.title}</span>
                    <span className="text-sm text-gray-400">{song.artist}</span>
                </li>
                ))}
            </ul>
            
        </div>

    );

};

export default SongList;  