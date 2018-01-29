define('smart-contrats/controllers/empresas', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ['page', 'size'],
    page: 1,
    size: 5,
    actions: {
      isEditingEmpresa: function isEditingEmpresa(item) {
        this.set('isEditingUser', true);
      },
      createEmpresa: function createEmpresa() {
        // get the input value from the .hbs template
        var nombreComercial = this.get('nComercial');
        var nombreLegal = this.get('nLegal');
        // create a record in Ember Data (locally, would not survive page refresh)
        var newRecord = this.store.createRecord('empresa', {
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
      viewEmpresa: function viewEmpresa(item) {
        // get the input value from the .hbs template
        var id = item.id;
        // find the record (cheating and using id 1 from my mocked server)
        this.store.findRecord('empresa', id).then(function (empresa) {
          alert(empresa.get('title') + ' ' + empresa.get('id'));
        });
      },
      editEmpresa: function editEmpresa(item) {
        var updatedTitle = item.id;
        var empresa = this.get('model').findBy('id', '1');
        empresa.set('title', updatedTitle); // locally update the title
        empresa.save(); // save the title to API via PATCH
      },
      destroyEmpresa: function destroyEmpresa(item) {
        console.log('id--->' + item.id);
        var destroyId = item.id;
        var empresa = this.get('model').findBy('id', destroyId);
        empresa.destroyRecord(); // destroy deletes & saves in one step
      }
    }
  });
});