var path = require("path");



module.exports = function (app) {

    app.get('/', (req, res) => res.render('./public/index'))
    app.get('*', (req, res) => res.render('./public/index'))

};
