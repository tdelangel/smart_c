

import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

const { String: { pluralize, underscore } } = Ember;

// Create this file with `ember g adapter application`

  export default DS.JSONAPIAdapter.extend({
    headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
   host: config.APP.REST_WSPREFIX,
  namespace: 'api',
  defaultSerializer: 'JSONSerializer',
   pathForType(type) {
    return pluralize(underscore(type));
  }

});


