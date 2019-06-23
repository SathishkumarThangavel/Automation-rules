import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  actionStr: computed('content.action', function() {
    let content = this.get('content')
    return content.action && content.action.toString();
  }),
});
