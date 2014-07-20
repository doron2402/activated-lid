if (!global.AA) { global.AA = {}; }

var Hapi = require("hapi");

AA.Joi = require("joi");
AA.Mongo = require('mongoose');
AA.async = require('async');
AA._ = require('lodash');
AA.Settings = require('./settings');

console.log(AA.Settings);