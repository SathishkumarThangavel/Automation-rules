import Component from '@ember/component';

export default Component.extend({
  classNames: ['rules-criteria'],
  actions: {
    selectOption(key, value) {
      this.set(key,value);
    },
    removeActionsRow(row) {
      this.removeActionsRow(row);
    }
  }
});
