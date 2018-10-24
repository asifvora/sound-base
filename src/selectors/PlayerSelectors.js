import { createSelector } from 'reselect';

// playlists selectors
export const getPlaylists = state => state.songs.songs;
// player selectors
export const getPlayingIndex = state => state.player.playingIndex;

const getPlaylistItemsLength = createSelector(
  getPlaylists, (playlists) => (playlists ? playlists.length : 0)
);

export const getNextIndex = createSelector(
  getPlaylistItemsLength, getPlayingIndex,
  (playlistItemsLength, playingIndex) => (playingIndex === playlistItemsLength - 1 ? 0 : playingIndex + 1)
);

export const getPrevIndex = createSelector(getPlayingIndex, (playingIndex) => (playingIndex > 0 ? playingIndex - 1 : null));
