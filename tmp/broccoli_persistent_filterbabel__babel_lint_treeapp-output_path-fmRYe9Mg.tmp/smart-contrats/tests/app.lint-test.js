define('smart-contrats/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n2:8 - \'JSONAPIAdapter\' is defined but never used. (no-unused-vars)\n3:8 - \'config\' is defined but never used. (no-unused-vars)\n5:19 - \'pluralize\' is assigned a value but never used. (no-unused-vars)\n5:30 - \'underscore\' is assigned a value but never used. (no-unused-vars)\n9:16 - \'DS\' is not defined. (no-undef)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n20:11 - \'id\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('models/empresa.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/empresa.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});