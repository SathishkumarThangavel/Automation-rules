import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['rules-criteria'],
  isDateField: computed('rule.field', function() {
    let { rule } = this;
    return rule.field === 'receivedDate';
  }),
  actions: {
    selectOption(key, value) {
      this.set(key,value);
    },
    removeRulesRow(row) {
      this.removeRulesRow(row);
    }
  }
});
