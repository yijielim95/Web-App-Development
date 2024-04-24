'use strict';

import logger from '../utils/logger.js';
import playlistStore from '../models/playlist-store.js';

const playlist = {
  createView(request, response) {
    const playlistId = request.params.id;
    logger.debug('Playlist id = ' + playlistId);
    
    const viewData = {
      title: 'Collection Details',
      singlePlaylist: playlistStore.getPlaylist(playlistId)
    };

    response.render('playlist', viewData);
  },
};

export default playlist;