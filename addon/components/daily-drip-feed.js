import Ember from 'ember';
import layout from '../templates/components/daily-drip-feed';

const { Component,
        get,
        inject,
        set
      } = Ember;

export default Component.extend({
  layout,
  feed: inject.service(),
  topic: 'ember',
  init(){
    this._super(...arguments);
    let topic = get(this, 'topic');
    get(this, 'feed').getFeed(topic).then((results) => {
      set(this, 'results', results);
    });
  }
});
