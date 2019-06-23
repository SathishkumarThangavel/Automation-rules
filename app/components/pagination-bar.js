import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  page: 1,
  limit: 10,
  showPagination: equal('content.length', 10),
  rangeText: computed('page', function() {
    let start = (this.page - 1) * 10;
    let end = this.page * 10;
    return `${start + 1} - ${end}`;
  }),
  actions: {
    refreshList(page) {
      this.refreshList(page);
    }
  }
});
