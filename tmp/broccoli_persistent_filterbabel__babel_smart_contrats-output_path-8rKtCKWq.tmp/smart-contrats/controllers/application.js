define('smart-contrats/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      createBoardGame: function createBoardGame() {
        // get the input value from the .hbs template
        var newBoardGame = this.get('newBoardGame');
        // create a record in Ember Data (locally, would not survive page refresh)
        var newRecord = this.store.createRecord('empresa', {
          title: newBoardGame
        });
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save();
      },
      readBoardGame: function readBoardGame() {
        // get the input value from the .hbs template
        var id = this.get('boardGameId');
        // find the record (cheating and using id 1 from my mocked server)
        this.store.findRecord('empresa', 1).then(function (game) {
          alert(game.get('title') + ' ' + game.get('id'));
        });
      },
      updateBoardGame: function updateBoardGame() {
        var updatedTitle = this.get('updatedTitle');
        var game = this.get('model').findBy('id', '1');
        game.set('title', updatedTitle); // locally update the title
        game.save(); // save the title to API via PATCH
      },
      destroyBoardGame: function destroyBoardGame() {
        var destroyId = this.get('destroyId');
        var game = this.get('model').findBy('id', destroyId);
        game.destroyRecord(); // destroy deletes & saves in one step
      }
    }
  });
});