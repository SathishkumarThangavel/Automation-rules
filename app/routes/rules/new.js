import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create({rules: []});
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.loadData();
  },
  actions: {
    goToList() {
      this.transitionTo('rules.list');
    }
  }

});
