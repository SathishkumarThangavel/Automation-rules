import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.ajax.request('rules');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('list', model);
  },
  actions: {
    rowAction(row) {
      this.transitionTo('rules.details', row.id);
    }
  }

});
