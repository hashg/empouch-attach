import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  name: DS.attr('string'),
  photo: DS.attr('attachments', { defaultValue: [] }),
  gallery: DS.attr('attachments', { defaultValue: [] })
});
