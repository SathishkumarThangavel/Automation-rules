import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import ajaxService from 'automation-rules/utils/send-request';

export default Controller.extend({
  errMsg: null,
  rulesLength: computed('model.rules', function() {
    let { model } = this;
    return model.rules && model.rules.length;
  }),
  loadData() {
    let rules = [];
    let actions = [];
    rules.push({field: 'from'});
    actions.push({value:'mark as read'});
    this.model.setProperties({rules,actions});
  },
  actions: {
    selectOption(key,value) {
      this.set(key, value);
    },
    addRulesRow() {
      this.model.rules.pushObject({field: 'from'});
    },
    removeRulesRow(row) {
      let { model } = this;
      model.rules.removeAt(row.index);
    },
    addActionRow() {
      let { model } = this;
      if(model.actions.length<3) {
        model.actions.pushObject({});
      }
    },
    removeActionsRow(row) {
      let { model } = this;
      model.actions.removeAt(row.index);
    },
    closeErrBanner() {
      this.set('errMsg', null);
    },
    saveRecord() {
      let { model } = this;
      let err = [];
      let data = {};
      if (isEmpty(model.name)) {
        err.push('Please Enter Name');
      }
      if (isEmpty(model.type)) {
        err.push('Please Select Type');
      }
      if (isPresent(err)) {
        this.set('errMsg', err);
        return;
      }
      // TODO: Needs to implement serialize method to handle it in proper way
      if(model) {
        data.name=model.name;
        data.type=model.type;
        data.rules=[];
        if(model.rules) {
          for(let i=0;i<model.rules.length;i++) {
            let obj = {
              field: model.rules[i].field,
              operator: model.rules[i].operator,
              value: model.rules[i].value
            };
            data.rules.pushObject(obj);
          }
        }
        data.actions=[];
        if(model.actions) {
          for(let i=0;i<model.actions.length;i++) {
            let obj = {
              value: model.actions[i].value
            };
            data.actions.pushObject(obj);
          }
        }
      }
      ajaxService('rules', {data: JSON.stringify(data),dataType: 'json',contentType: 'application/json;charset=UTF-8',method: 'POST'}).then(() => {
        this.send('goToList');
      }).catch(()=>{
        this.set('errMsg', 'something wrong try again!')
      });
    }
  }
});
