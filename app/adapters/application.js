import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

PouchDB.debug.enable('*');

// var remote = new PouchDB('http://localhost:5984/library');
var db = new PouchDB('local_library');

// db.sync(remote, {
//    live: true,   // do a live, ongoing sync
//    retry: true   // retry if the conection is lost
// });

export default Adapter.extend({
  db: db,

  unloadedDocumentChanged: function(obj) {
    let store = this.get('store');
    let recordTypeName = this.getRecordTypeName(store.modelFor(obj.type));
    this.get('db').rel.find(recordTypeName, obj.id).then(function(doc) {
      store.pushPayload(recordTypeName, doc);
    });
  }
});
