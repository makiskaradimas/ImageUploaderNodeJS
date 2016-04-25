/**
 * Created by makis.karadimas on 07/04/2016.
 */
var express = require('express'),
    router,
    home = require('../controllers/home'),
    image = require('../controllers/image');
module.exports = {
    initialize: function(app) {
        if (!router) {
            router = express.Router();
        }
        router.get('/', home.index);
        router.get('/images/:image_id', image.index);
        router.post('/images', image.create);
        router.post('/images/:image_id/like', image.like);
        router.post('/images/:image_id/comment', image.comment);
        router.delete('/images/:image_id', image.remove);
        app.use(router);
    },
    routerInit: function(routerIn) {
        router = routerIn;
    }
};
