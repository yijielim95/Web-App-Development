'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "All England Open Badminton Championships",
      info: appStore.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('start', viewData);   
  },
};

export default start;