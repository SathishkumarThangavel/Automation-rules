import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  page: 1,
  sortOrder: '',
  actions: {
    refreshList(page, limit) {
      let url = `/rules?_page=${page}&_limit=${limit}`;
      this.ajax.request(url).then((json) => {
        this.set('model', json);
        this.set('list', this.model);
      });
    },
    searchRules(searchText) {
      let { model } = this;
      if(isEmpty(searchText)) {
        this.set('list', model);
        return;
      }
      let result = model.filter(function(rule) {
        if(rule.name.includes(searchText)) {
          return rule;
        }
      });
      this.set('list', result);
    },
    /*
      if list in asc, then sort in desc
      if not sorted, then sort in asc,
      if list in desc, then show in actual(by id)
    */
    // TODO: implement sorting
    sort() {
      if (this.sortOrder === 'asc') {
        this.set('sortOrder', 'desc');

      } else if (this.sortOrder === '') {
        this.set('sortOrder', 'asc');

      } else {
        this.set('sortOrder', '');

      }
    }
  }
});
