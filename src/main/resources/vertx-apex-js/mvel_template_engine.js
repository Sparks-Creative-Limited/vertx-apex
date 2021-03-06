/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-apex-js/mvel_template_engine */
var utils = require('vertx-js/util/utils');
var TemplateEngine = require('vertx-apex-js/template_engine');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMVELTemplateEngine = io.vertx.ext.apex.templ.MVELTemplateEngine;

/**
 A template engine that uses the Handlebars library.

 @class
*/
var MVELTemplateEngine = function(j_val) {

  var j_mVELTemplateEngine = j_val;
  var that = this;
  TemplateEngine.call(this, j_val);

  /**
   Set the extension for the engine

   @public
   @param extension {string} the extension 
   @return {MVELTemplateEngine} a reference to this for fluency
   */
  this.setExtension = function(extension) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new MVELTemplateEngine(j_mVELTemplateEngine.setExtension(extension));
    } else utils.invalidArgs();
  };

  /**
   Set the max cache size for the engine

   @public
   @param maxCacheSize {number} the maxCacheSize 
   @return {MVELTemplateEngine} a reference to this for fluency
   */
  this.setMaxCacheSize = function(maxCacheSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return new MVELTemplateEngine(j_mVELTemplateEngine.setMaxCacheSize(maxCacheSize));
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_mVELTemplateEngine;
};

/**
 Create a template engine using defaults

 @memberof module:vertx-apex-js/mvel_template_engine

 @return {MVELTemplateEngine} the engine
 */
MVELTemplateEngine.create = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return new MVELTemplateEngine(JMVELTemplateEngine.create());
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = MVELTemplateEngine;