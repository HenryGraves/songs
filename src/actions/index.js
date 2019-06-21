// actions/index.js
/**
 * Action creator
 * SONG_SELECTED
 * @returns action object
 */
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
}
