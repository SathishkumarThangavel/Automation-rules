import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  actions: {
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
    }
  }
});
