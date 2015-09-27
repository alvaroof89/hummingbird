import Ember from 'ember';
import { RoutableComponentRouteMixin } from 'client/mixins/routable-component';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { Route } = Ember;

export default Route.extend(RoutableComponentRouteMixin, UnauthenticatedRouteMixin, {
  titleToken: 'Sign Up',

  model() {
    return this.store.createRecord('user');
  }
});
