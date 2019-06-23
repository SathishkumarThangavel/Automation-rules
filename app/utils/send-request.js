import RSVP from 'rsvp';
import { run } from '@ember/runloop';

// TODO: Completely remove ember-ajax and make use of adapter
export default function ajax(url, params) {
  let finalUrl = `http://localhost:3000/${url}`;
  params = params || {};

  return new RSVP.Promise((resolve) => {

    $.ajax(finalUrl, params).then((data) => {
      run(null, resolve, data);
    });
  });
}
