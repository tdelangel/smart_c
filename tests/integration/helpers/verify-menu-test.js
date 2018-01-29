
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('verify-menu', 'helper:verify-menu', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{verify-menu inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

