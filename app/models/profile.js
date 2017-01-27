import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  name: DS.attr('string'),
  photo: DS.attr('attachment', { defaultValue: function() { return []; } }),
  gallery: DS.attr('attachment', { defaultValue: function() { return []; } })
});
