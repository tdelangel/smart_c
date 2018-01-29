define('smart-contrats/controllers/licitacion', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ['page', 'size'],
    page: 1,
    size: 5,
    actions: {
      isEditingLicitacion: function isEditingLicitacion(item) {
        this.set('isEditingUser', true);
      },
      createLicitacion: function createLicitacion() {
        // get the input value from the .hbs template
        var nombreComercial = this.get('nComercial');
        var nombreLegal = this.get('nLegal');
        // create a record in Ember Data (locally, would not survive page refresh)
        var newRecord = this.store.createRecord('Licitacion', {
          "rfc": "xxx",
          "razon_social": "string",
          "pagina_web": "string",
          "telefono": 78989989,
          "id": 8
        });
        console.log(newRecord);
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save();
      },
      viewLicitacion: function viewLicitacion(item) {
        // get the input value from the .hbs template
        var id = item.id;
        // find the record (cheating and using id 1 from my mocked server)
        this.store.findRecord('Licitacion', id).then(function (Licitacion) {
          alert(Licitacion.get('title') + ' ' + Licitacion.get('id'));
        });
      },
      editLicitacion: function editLicitacion(item) {
        var updatedTitle = item.id;
        var Licitacion = this.get('model').findBy('id', '1');
        Licitacion.set('title', updatedTitle); // locally update the title
        Licitacion.save(); // save the title to API via PATCH
      },
      destroyLicitacion: function destroyLicitacion(item) {
        console.log('id--->' + item.id);
        var destroyId = item.id;
        var Licitacion = this.get('model').findBy('id', destroyId);
        Licitacion.destroyRecord(); // destroy deletes & saves in one step
      }
    }
  });
});