import Ember from 'ember';
export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 5,
  actions: {
 
  createLicitacion() {
      // get the input value from the .hbs template
    let newRecord = this.store.createRecord('Licitacion', {
        "rfc": "xxx",
        "razon_social": "string",
        "pagina_web": "string",
        "telefono": 78989989,
        "id": 8
      })
       // Save the record to the API endpoint specified in adapters/application.js
      newRecord.save();
    },
    viewLicitacion(item) {
      // get the input value from the .hbs template
      let id = item.id;
      // find the record (cheating and using id 1 from my mocked server)
      this.store.findRecord('Licitacion', id).then((Licitacion) => {
        alert(Licitacion.get('title') + ' ' + Licitacion.get('id'))
      })
    },
    editLicitacion(item) {
      let updatedTitle = item.id;
      let Licitacion = this.get('model').findBy('id', '1')
      Licitacion.set('title', updatedTitle) // locally update the title
      Licitacion.save(); // save the title to API via PATCH
    },
    destroyLicitacion(item) {
      console.log('id--->'+item.id)
      let destroyId = item.id;
      let Licitacion = this.get('model').findBy('id', destroyId)
      Licitacion.destroyRecord() // destroy deletes & saves in one step
    }
  }
});