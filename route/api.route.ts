
module.exports = function (app) {
    var getDetails = require('../controller/api.controller.ts');

    // todoList Routes

    app.route('/getUserDetails/:id')
        .get(getDetails.getDetails)
    app.route('/getTodoDetails/:ToDoid')
        .get(getDetails.getToDo)
    app.route('/getActiveUser')
        .get(getDetails.getActiveUser)
    app.route('/getActiveTodo/:id')
        .get(getDetails.getActiveTodo)
};