define('smart-contrats/tests/integration/helpers/verify-menu-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('verify-menu', 'helper:verify-menu', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "mH8MPKBG",
      "block": "{\"statements\":[[1,[33,[\"verify-menu\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});