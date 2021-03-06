QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/application.js should pass ESLint\n\n2:8 - \'JSONAPIAdapter\' is defined but never used. (no-unused-vars)\n3:8 - \'config\' is defined but never used. (no-unused-vars)\n5:19 - \'pluralize\' is assigned a value but never used. (no-unused-vars)\n5:30 - \'underscore\' is assigned a value but never used. (no-unused-vars)\n9:16 - \'DS\' is not defined. (no-undef)');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/application.js should pass ESLint\n\n28:3 - Unexpected console statement. (no-console)');
});

QUnit.test('controllers/empresas.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/empresas.js should pass ESLint\n\n7:23 - \'item\' is defined but never used. (no-unused-vars)');
});

QUnit.test('controllers/home.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/home.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('controllers/login.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/login.js should pass ESLint\n\n18:8 - \'appController\' is assigned a value but never used. (no-unused-vars)\n20:8 - \'query\' is assigned a value but never used. (no-unused-vars)\n24:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('models/empresa.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/empresa.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/application.js should pass ESLint\n\n13:7 - Redundant double negation. (no-extra-boolean-cast)\n26:5 - Unexpected console statement. (no-console)\n30:6 - Unexpected console statement. (no-console)\n35:7 - \'$\' is not defined. (no-undef)');
});

QUnit.test('routes/empresas.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/empresas.js should pass ESLint\n\n');
});

QUnit.test('routes/home.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/home.js should pass ESLint\n\n');
});

QUnit.test('routes/login.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/login.js should pass ESLint\n\n4:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n4:42 - \'transition\' is defined but never used. (no-unused-vars)\n5:20 - Empty block statement. (no-empty)');
});

QUnit.test('routes/planeacion.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/planeacion.js should pass ESLint\n\n');
});

