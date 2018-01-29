QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/application.js should pass ESLint\n\n2:8 - \'JSONAPIAdapter\' is defined but never used. (no-unused-vars)\n3:8 - \'config\' is defined but never used. (no-unused-vars)\n5:19 - \'pluralize\' is assigned a value but never used. (no-unused-vars)\n5:30 - \'underscore\' is assigned a value but never used. (no-unused-vars)\n9:16 - \'DS\' is not defined. (no-undef)');
});
