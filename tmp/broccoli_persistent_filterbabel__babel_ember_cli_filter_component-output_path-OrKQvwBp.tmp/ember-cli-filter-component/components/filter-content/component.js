define('ember-cli-filter-component/components/filter-content/component', ['exports', 'ember', 'ember-cli-filter-component/components/filter-content/template'], function (exports, _ember, _emberCliFilterComponentComponentsFilterContentTemplate) {

  /**
   * @name        FilterContentComponent
   * @description component that applys a simple filter to a specified content model
   *              based on basic matching
   * @extends     external:Ember.Component
   */
  exports['default'] = _ember['default'].Component.extend({

    /* properties
    ------------------------ */

    /**
     * @name        classNames
     * @description class names applied to the component DOM object
     * @type        {array.<string>}
     */
    classNames: ['filter-content'],

    /**
     * @name        content
     * @description the content passed in to be filtered
     * @type        {(array|object)}
     */
    content: [],

    /**
     * @name        debounceFilter
     * @description debounced call to `applyFilter`
     * @type        {Ember.run.later}
     */
    debounceFilter: null,

    /**
     * @name        layout
     * @description component layout
     */
    layout: _emberCliFilterComponentComponentsFilterContentTemplate['default'],

    /**
     * @name        properties
     * @description a space-delimited string of dot-notated properties to match
     *              against when filtering
     * @type        {string}
     */
    properties: '',

    /**
     * @name        query
     * @description the query string being filtered against
     * @type        {string}
     */
    query: '',

    /**
     * @name        timeout
     * @description time in milliseconds to debounce `applyFilter`
     * @type        {(number|string)}
     */
    timeout: 420,

    /* computed
    ------------------------ */

    /**
     * @name        filterableProperties
     * @description normalize `properties` and return them as an array
     * @returns     {array} an array of normalized property indices
     */
    normalizedProperties: _ember['default'].computed('properties', function () {

      try {

        var properties = this.get('properties') || '';

        return !properties ? [] : properties
        // replace invalid characters
        .replace(/[^\w\s\@\.\-]+/g, '')
        // replace multiple periods with single periods
        .replace(/[\.]{2,}/g, '.')
        // normalize delimiter to single spaces
        .replace(/(\.+)?\s\1?/g, ' ').split(/\s+/g)
        // remove empty items
        .filter(function (z) {
          return z !== '';
        });
      } catch (exception) {

        if (window.console) {
          window.console.error('normalizedProperties', exception);
        }
      }
    }),

    /**
     * @name        queryComputed
     * @description the string being matched against 'contentComputed' replaces
     *              forward slashes to prevent error
     * @returns     {string}
     * @todo        is there a better solution for forward slashes?
     */
    normalizedQuery: _ember['default'].computed('query', function () {

      try {

        var query = this.get('query');

        return _ember['default'].isPresent(query) ? query.replace(/\\+/g, '') : '';
      } catch (exception) {

        if (window.console) {
          window.console.error('normalizedQuery', exception);
        }
      }
    }),

    /* observers
    ------------------------ */

    /**
     * @name        setFilterTimer
     * @description an observer that passes `debounceFilter` to `Ember.run.later`
     */
    setFilterTimer: _ember['default'].observer('content', 'normalizedProperties', 'normalizedQuery', function () {

      try {

        // Ember.run.cancel (this.get ('debounceFilter'));
        this.set('debounceFilter', _ember['default'].run.debounce(this, this.applyFilter, parseInt(this.get('timeout'), 10), false));
      } catch (exception) {

        if (window.console) {
          window.console.error('setFilterTimer', exception);
        }
      }
    }),

    /* methods
    ------------------------ */

    /**
     * @name        aContainsB
     * @description checks if a contains a match for b; passed values are sloppily
     *              coerced to strings
     * @param       {(number|string)} a
     * @param       {(number|string)} b
     * @returns     {boolean} whether there was a match between the passed values
     */
    aContainsB: function aContainsB(a, b) {

      try {

        var matched = false;
        var matchTypes = ['boolean', 'number', 'string'];

        if (matchTypes.indexOf(_ember['default'].typeOf(a)) !== -1 && matchTypes.indexOf(_ember['default'].typeOf(b)) !== -1) {

          matched = _ember['default'].inspect(a).toLowerCase().match(_ember['default'].inspect(b).toLowerCase()) !== null;
        }

        return matched;
      } catch (exception) {

        if (window.console) {
          window.console.error('aContainsB', exception);
        }
      }
    },

    /**
     * @name        applyFilter
     * @description filters for `query` against value(s) of `properties` in `content`
     */
    applyFilter: function applyFilter() {
      var _this = this;

      try {

        var content = this.get('content') || [];
        var matched = false;
        var properties = this.get('normalizedProperties') || [];
        var propertiesTmp = [];
        var query = this.get('normalizedQuery') || '';
        var values = [];

        if (!content || !properties) {
          return content ? content : [];
        }

        if (content.length && properties.length && !!query) {

          content = content.filter(function (item) {

            matched = false;
            propertiesTmp = properties.slice(0);

            propertiesTmp.forEach(function (prop) {

              values = values.concat(_this.getContentProps(item, prop) || []);
            });

            while (matched === false && values.length) {

              matched = _this.aContainsB(values.shift(), query) ? true : false;
            }

            values = [];

            return matched;
          });
        }

        this.set('filteredContent', content);
      } catch (exception) {

        if (window.console) {
          window.console.error('applyFilter', exception);
        }
      }
    },

    /**
     * @name        getContentProps
     * @description returns an array of values from `item` at dot notated `property`
     * @param       {(array|object)} item
     * @param       {string} property dot notated index
     * @returns     {array} an array of values matching `property`'s index
     */
    getContentProps: function getContentProps(item, property) {
      var _this2 = this;

      var inception = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

      try {

        var propArr = property.split(/\.+/g); // (/\.?\@each\.?/g);
        var prop = '';
        var values = [];
        var z = [];

        if (!propArr.length) {
          return [];
        }
        if (inception > 100) {
          throw 'recursing too far, limit is 100 levels';
        }

        prop = propArr.shift();

        // get array items
        if (prop === '@each') {

          if (item.forEach) {

            item.forEach(function (i) {
              return values = values.concat(propArr.length ? _this2.getContentProps(i, propArr.join('.'), ++inception) : i);
            });
          }

          // get item property
        } else {

            z = _ember['default'].get(item, prop) || [];
            values = values.concat(propArr.length ? this.getContentProps(z, propArr.join('.'), ++inception) : z);
          }

        return values && !!values.length ? values : [];
      } catch (exception) {

        if (window.console) {
          window.console.error('getContentProps', exception);
        }
      }
    },

    /**
     * @name        init
     * @description n/a
     */
    init: function init() {

      this._super();
      this.applyFilter();
    },

    /**
     * @name        willDestroy
     * @todo        this may be elligible for deprecation
     * @description runs before the component is destroyed and tears things down
     */
    willDestroy: function willDestroy() {

      this._super();
      _ember['default'].run.cancel(this.get('debounceFilter'));
    }
  });
});