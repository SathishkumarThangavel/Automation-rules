import Controller from '@ember/controller';
import { isEmpty, isPresent } from '@ember/utils';
import ajaxService from 'automation-rules/utils/send-request';

export default Controller.extend({
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
      // TODO: Needs to implement serialize method to avoid sending unintended param
      let url = `rules/${model.id}`;
      let params = {
        data: JSON.stringify(model),
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        method: 'PUT'
      }
      ajaxService(url, params).then(() => {
        this.send('goToList');
      }).catch(()=>{
        this.set('errMsg', 'something wrong try again!')
      });
    }
  }
});
