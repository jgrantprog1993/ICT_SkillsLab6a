"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
//const about = require("./controllers/about.js");
const playlist = require('./controllers/playlist.js');

const accounts = require('./controllers/accounts.js');

const about = {
  index(request, response) {
    const viewData = {
      title: 'About Playlist Maker',
    };
    response.render('about', viewData);
  },
};

//router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
//router.get('/playlist/:id/deleteplaylist/:playlistid', playlist.deletePlaylist);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);
router.post('/playlist/:id/addsong', playlist.addSong);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

module.exports = router;
