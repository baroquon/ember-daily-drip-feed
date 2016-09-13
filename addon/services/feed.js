import Ember from 'ember';
import RSVP from 'rsvp';

const { get,
  Service,
  set } = Ember;

export default Service.extend({
  setFeed(){
    let feedPromise = new RSVP.Promise((resolve, reject) => {
      if(true /*all is well*/){
        resolve(/* some resolvabled*/);
      } else {
        reject(/* some error */);
      }
    });
    return set(this, 'results', feedPromise);
  },
  getFeed(topic){
    if(Ember.isPresent(get(this, 'results')) && topic === this.get('topic')){
      return get(this, 'results');
    } else {
      return this.setFeed(topic);
    }
  }
});
