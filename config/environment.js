/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'smart-contrats',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {/* jshint node: true */
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
   'default-src': "'none'  http://10.20.58.23:3002 http://10.15.3.32:3000 http://localhost:35729 ",
        'script-src': "'self' 'unsafe-inline' 'unsafe-eval'  http://10.20.58.23:3002 http://10.15.3.32:3002 http://localhost:35729",
        //'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://10.15.9.7:35729 192.168.56.102:35729", // FOR SERVER
        'font-src': "'self' 'unsafe-inline' 'unsafe-eval' data: http://fonts.gstatic.com http://10.15.3.32:3002 http://localhost:35729",
        'connect-src': "'self' http://localhost:3000  http://10.20.58.23:3002 ws://localhost:35729",
        //'connect-src': "'self' http://www.gob.mx/cms/tramites/api http://104.131.29.89:3000 ws://104.131.29.89:35729 ws://localhost:35729", // FOR SERVER
        'img-src': "'self'",
        'style-src': "'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com",
        'media-src': "'self'"
    },
    APP: {
      REST_WSPREFIX: undefined,
      LetrasSitios: 120
    }
  };

  if (environment === 'development') {
    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    //ENV.APP.LOG_TRANSITIONS = true;
    //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    //ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.LS = 'cms_gob_mx_session_token:atuh-manager-v1.0'
    //ENV.APP.REST_WSPREFIX = 'http://localhost:3000' // IP LOCAL
   ENV.APP.WSSUFIX= 'api/'

    ENV.APP.REST_WSPREFIX = 'http://10.20.58.23:3002' // IP SERVER
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.REST_WSPREFIX = 'http://10.20.58.23:3002' // IP LOCAL
    //ENV.APP.REST_WSPREFIX = 'http://104.131.29.89:3000' // IP SERVER
    // keep test console output quieter
    //ENV.APP.LOG_ACTIVE_GENERATION = false;

    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  // -vane  ENV.APP.REST_WSPREFIX = 'http://www.gob.mx/cms/tramites' // IP LOCAL
  }

  return ENV;
};
