import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('project-home', {path: '/:username/:project'});
  this.route('create-project', {path: '/create'});
  this.route('edit-project', {path: '/:username/:project/edit'});
  this.route('delete-project', {path: '/:username/:project/delete'});
  this.route('create-category', {path: '/:username/:project/category/create'});
  this.route('edit-category', {path: '/:username/:project/category/:category'});
  this.route('delete-category', {path: '/:username/:project/category/:category/delete'});
  this.route('create-page-plugin', {path: '/:username/:project/page_plugin/create'});
  this.route('edit-page-plugin', {path: '/:username/:project/page_plugin/:page_plugin'});
  this.route('delete-page-plugin', {path: '/:username/:project/page_plugin/:page_plugin/delete'});
  this.route('create-project-plugin', {path: '/:username/:project/project_plugin/create'});
  this.route('edit-project-plugin', {path: '/:username/:project/project_plugin/:project_plugin'});
  this.route('delete-project-plugin', {path: '/:username/:project/project_plugin/:project_plugin/delete'});
  this.route('create-page', {path: '/:username/:project/page/create'});
  this.route('edit-page', {path: '/:username/:project/page/:page'});
  this.route('delete-page', {path: '/:username/:project/page/:page/delete'});
  this.route('create-post', {path: '/:username/:project/post/create'});
  this.route('edit-post', {path: '/:username/:project/post/:post'});
  this.route('delete-post', {path: '/:username/:project/post/:post/delete'});
});

export default Router;
