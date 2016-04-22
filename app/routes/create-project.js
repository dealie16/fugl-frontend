import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),
    model() {
        this.project = this.store.createRecord('project',
                                              {owner: this.get('session.data.user.id')}
                                             );
        return this.project;
    },
    actions: {
        created() {
            this.transitionTo('project-home', this.get('session.data.user.username'), this.get('project.title'));
        },
    },
});
