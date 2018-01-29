define('smart-contrats/tests/unit/serializers/empresas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('empresas', 'Unit | Serializer | empresas', {
    // Specify the other units that are required for this test.
    needs: ['serializer:empresas']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});