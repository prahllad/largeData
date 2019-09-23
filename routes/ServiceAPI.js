'use strict';

const userCtrl = require('../controllers/UserCtrl');

module.exports = (router) => {

  router.route('/upload').post(userCtrl.fileUpload);
  router.route('/').get(userCtrl.test);


  return router;
};