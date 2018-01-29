import DS from 'ember-data';

export default DS.Model.extend({
rfc: DS.attr ('string'),
razon_social: DS.attr ('string'),
pagina_web: DS.attr ('string'),
telefono: DS.attr ('string')
});

