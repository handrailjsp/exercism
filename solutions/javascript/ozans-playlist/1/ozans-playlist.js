// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  
  const nPlaylist = new Set(playlist);
  const nDPlaylist = [...nPlaylist]
  
  return nDPlaylist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const dPlaylist = new Set(playlist);
  
  return dPlaylist.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const aPlaylist = new Set(playlist) 
  
  
    if  (!aPlaylist.has(track)) {  
    aPlaylist.add(track);
    } 
  const aNDPlaylist = [...aPlaylist]
  return aNDPlaylist
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const dPlaylist = new Set(playlist);
  if (dPlaylist.has(track)){
    dPlaylist.delete(track);
  }
  const dNDPlaylist = [...dPlaylist]
return dNDPlaylist;

}


/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
   const track = new Set(playlist.map(n => {
    
    const [, artist] = n.split(' - ');
    return artist;
  }))

  return [...track];
}

