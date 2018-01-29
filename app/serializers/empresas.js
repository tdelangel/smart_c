import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload = {empresas: payload};

        return this._super(store, primaryModelClass, payload, id, requestType);
    }   
});
