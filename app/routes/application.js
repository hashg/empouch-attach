import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('profile');
  },

  setupController(controller, model) {
    this._super(controller, model);

    var profiles =  this.store.findAll('profile').then(
      (model) => controller.set('profiles', model)
    );
  },
  actions: {
    save(model) {
      const profile = this.controller.get('model');
      model.save().then(() => Ember.Logger.debug('Saved.'));
    },
    photoAdded(file) {
      const profile = this.controller.get('model');
      const selections = Ember.get(profile, 'photo');
      // Ember.Logger.debug(file);

      selections.addObject(Ember.Object.create({
        'name' : file.name,
        'content_type' : file.type,
        'data' : file.data
      }));
      // Ember.Logger.debug(profile);
      profile.save();
    },

    galleryAdded(file) {
      const profile = this.controller.get('model');
      const selections = Ember.get(profile, 'gallery');
      // Ember.Logger.debug(file);

      selections.addObject(Ember.Object.create({
        'name' : file.name,
        'content_type' : file.type,
        'data' : file.data
      }));
      // Ember.Logger.debug(profile);
      profile.save();
    },
  }
});
