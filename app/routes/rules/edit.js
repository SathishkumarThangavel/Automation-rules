import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let url = `rules/${params.id}`;
      return this.ajax.request(url);
  },
  actions: {
    goToList() {
      this.transitionTo('rules.list');
    }
  }
});
