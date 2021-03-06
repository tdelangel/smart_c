'use strict';

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
define('smart-contrats/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('smart-contrats/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'smart-contrats/tests/helpers/start-app', 'smart-contrats/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('smart-contrats/tests/helpers/resolver', ['exports', 'smart-contrats/resolver', 'smart-contrats/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('smart-contrats/tests/helpers/start-app', ['exports', 'smart-contrats/app', 'smart-contrats/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
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
define('smart-contrats/tests/test-helper', ['smart-contrats/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('smart-contrats/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/verify-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/verify-menu-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/empresas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/empresas-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/licitacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/licitacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/adjudicacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/adjudicacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/empresa-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/empresa-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/licitacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/licitacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/adjudicacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/adjudicacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/adjudicacion/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/adjudicacion/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/adjudicacion/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/adjudicacion/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/adjudicacion/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/adjudicacion/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/empresas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/empresas-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/licitacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/licitacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/planeacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/planeacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/empresas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/empresas-test.js should pass ESLint\n\n');
  });
});
define('smart-contrats/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('smart-contrats/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('smart-contrats/tests/unit/controllers/empresas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:empresas', 'Unit | Controller | empresas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('smart-contrats/tests/unit/controllers/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('smart-contrats/tests/unit/controllers/licitacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:licitacion', 'Unit | Controller | licitacion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('smart-contrats/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('smart-contrats/tests/unit/models/adjudicacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('adjudicacion', 'Unit | Model | adjudicacion', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('smart-contrats/tests/unit/models/empresa-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('empresa', 'Unit | Model | empresa', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('smart-contrats/tests/unit/models/licitacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('licitacion', 'Unit | Model | licitacion', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('smart-contrats/tests/unit/routes/adjudicacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:adjudicacion', 'Unit | Route | adjudicacion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/adjudicacion/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:adjudicacion/edit', 'Unit | Route | adjudicacion/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/adjudicacion/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:adjudicacion/index', 'Unit | Route | adjudicacion/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/adjudicacion/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:adjudicacion/new', 'Unit | Route | adjudicacion/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/empresas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:empresas', 'Unit | Route | empresas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/licitacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:licitacion', 'Unit | Route | licitacion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/routes/planeacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:planeacion', 'Unit | Route | planeacion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('smart-contrats/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
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
require('smart-contrats/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
