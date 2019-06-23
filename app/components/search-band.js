import Component from '@ember/component';

export default Component.extend({
  classNames: ['search-band'],
  init() {
    this._super(...arguments);
    this.set('list', this.model);
  },
  actions: {
    searchRules(searchText) {
      this.searchRules(searchText);
    }
  }
});
