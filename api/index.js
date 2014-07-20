if (!global.AA) { global.AA = {}; }

var Hapi = require("hapi");

AA.Joi = require("joi");
AA.Mongo = require('mongoose');
AA.Mysql = require('mysql');
AA.async = require('async');
AA._ = require('lodash');
AA.Settings = require('./settings');
AA.Routes = require('./routes');

AA.server = new Hapi.Server(AA.Settings.PORT, AA.Settings.HOST, AA.Settings.OPTIONS);

AA.server.route([
    AA.Routes.external.post_new_lead
]);
AA.server.start(function() {
    console.log("Hapi server started @", AA.server.info.uri);
});