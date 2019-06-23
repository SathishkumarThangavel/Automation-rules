import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let url = `rules/${params.id}`;
    this.ajax.request(url);
  }
});
