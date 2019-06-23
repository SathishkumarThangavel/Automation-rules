export function initialize(application) {
  application.inject('route', 'ajax', 'service:ajax');
  application.inject('controller', 'ajax', 'service:ajax');
}

export default {
  initialize
};
