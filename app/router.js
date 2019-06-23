import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rules', function() {
    this.route('details', {path: '/:id'});
    this.route('new');
    this.route('edit', {path: '/:id/edit'});
    this.route('list', {path: '/'});
  });
});

export default Router;
