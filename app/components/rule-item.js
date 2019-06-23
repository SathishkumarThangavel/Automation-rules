import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  actionStr: computed('content.action', function() {
    let content = this.get('content')
    let actionStr = '';
    if(content.actions) {
      content.actions.forEach((action)=> {
        actionStr+=`${action.value}, `;
      });
    }
    return actionStr.slice(0,actionStr.length-2);
  }),
});
