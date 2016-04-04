import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  body: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
