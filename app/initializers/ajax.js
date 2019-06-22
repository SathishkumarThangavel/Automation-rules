export function initialize(application) {
  application.inject('route', 'ajax', 'service:ajax');
  // application.inject('controller', 'store', 'service:store');
}

export default {
  initialize
};
