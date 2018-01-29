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

        var payload = {
          "rfc": this.get('nRfc'),
          "razon_social": this.get('nLegal'),
          "pagina_web": this.get('nPaginaw'),
          "telefono": this.get('nTelefono')

          // get the input value from the .hbs template

          // create a record in Ember Data (locally, would not survive page refresh)
        };var newRecord = this.store.createRecord('empresa', payload);
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
      modalEditEmpresa: function modalEditEmpresa(item) {
        var itemEdit = JSON.stringify(item);
        var jsonItem = JSON.parse(itemEdit);

        var rfc = jsonItem.rfc;
        var telefono = jsonItem.telefono;
        var razon_social = jsonItem.razon_social;
        var pagina_web = jsonItem.pagina_web;
        var id = item.id;
        console.log('preuessssss');
        this.set('eId', id);
        this.set('eRfc', rfc);
        this.set('eTelefono', rfc);
        this.set('eLegal', razon_social);
        this.set('ePaginaw', pagina_web);

        Ember.$('#modalEditEmpresas').modal();
      },
      editEmpresa: function editEmpresa() {
        var id = this.get('eId');
        var rfc = this.get('eRfc');
        var razon_social = this.get('eLegal');
        var pagina_web = this.get('ePaginaw');
        var telefono = this.get('eTelefono');

        var update = this.get('store').findRecord('empresa', id).then(function (values) {
          values.set('rfc', rfc);
          values.set('razon_social', razon_social);
          values.set('pagina_web', pagina_web);
          values.set('telefono', telefono);
          values.save();
        });
      },
      destroyEmpresa: function destroyEmpresa(item) {
        console.log('id--->' + item.id);
        /* Ember.$.prompt("¿Está usted seguro de eliminar la empresa? " + "<b>"+ item.id+ "</b>" , {
           overlayspeed:'fast',
           promptspeed:'fast',
           title: "Empresa",
           buttons: { "Eliminar": true, "Cancelar": false },
           submit: function(e,answer){
             if(answer === true){
                var itemSelected = params;
               itemSelected.destroyRecord();
                controller.set('txEvent',true);
               controller.set('txMessage','Eliminación Exitosa');
                setTimeout(function () {
                 controller.set('txEvent',false);
                 controller.set('txMessage','');
                 Ember.$(".navStatus").removeClass("active");
                 Ember.$("#status-" + 0).addClass("active");
               },3000);
               }
           }
         });
         */
        var destroyId = item.id;
        var empresa = this.get('model').findBy('id', destroyId);
        empresa.destroyRecord().then(function (account) {
          console.log('account deleted' + account);
          // controller.transitionToRoute('accounts.index');
        }, function (response) {
          console.log('account NOT deleted' + response);
        });
        // destroy deletes & saves in one step
      }
    }
  });
});