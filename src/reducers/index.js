// reducers/index.js
import { combineReducers } from 'redux';
/**
 * @name songsReducer
 * @param none
 * @returns array type, object elements
 * @description returns an array of objects, song
 *              titles and durations.
 */
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It That Way', duration: '1:45' },
  ];
}

/**
 * @name selectedSongReducer
 * @param selectedSong, the song selected; defaults to null
 * @returns either original data, or new data usually comprised
 *          of the old data plus some small addition.
 */
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  } else {
    return selectedSong;
  }
}
/**
 * combine reducers call
 */
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,

});