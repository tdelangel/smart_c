define("ember-cli-pagination/remote/controller-mixin", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    queryParams: ["page", "perPage"],

    page: Ember.computed.alias("content.page"),

    totalPages: Ember.computed.alias("content.totalPages"),

    pagedContent: Ember.computed.alias("content")
  });
});