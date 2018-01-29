define('smart-contrats/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/empresas.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/empresas.js should pass ESLint\n\n97:45 - \'account\' is defined but never used. (no-unused-vars)\n99:25 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/licitacion.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/licitacion.js should pass ESLint\n\n35:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/verify-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/verify-menu.js should pass ESLint\n\n');
  });

  QUnit.test('models/adjudicacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/adjudicacion.js should pass ESLint\n\n');
  });

  QUnit.test('models/empresa.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/empresa.js should pass ESLint\n\n');
  });

  QUnit.test('models/licitacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/licitacion.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/adjudicacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/adjudicacion.js should pass ESLint\n\n');
  });

  QUnit.test('routes/adjudicacion/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/adjudicacion/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/adjudicacion/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/adjudicacion/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/adjudicacion/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/adjudicacion/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n12:7 - Redundant double negation. (no-extra-boolean-cast)');
  });

  QUnit.test('routes/empresas.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/empresas.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/licitacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/licitacion.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n3:41 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/planeacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/planeacion.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n5:8 - Unexpected console statement. (no-console)');
  });

  QUnit.test('serializers/empresas.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/empresas.js should pass ESLint\n\n');
  });
});