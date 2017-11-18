
module.exports = function(app) {
  var getUserDetails = require('../controller/api.controller.ts');

  // todoList Routes
  
  app.route('/getUserDetails/:id')
    .get(getUserDetails.getDetails)
};