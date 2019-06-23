import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let url = `rules/${params.id}`;
    return this.ajax.request(url);
  },
  actions: {
    editItem(params) {
      this.transitionTo('rules.edit', params.id);
    },
    deleteItem(params) {
      let url = `rules/${params.id}`
      this.ajax.delete(url).then(() => {
        this.transitionTo('rules.list');
      })
    }
  }
});
