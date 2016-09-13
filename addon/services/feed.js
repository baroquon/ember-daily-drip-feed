import Ember from 'ember';
import RSVP from 'rsvp';

const { get,
  Service,
  set } = Ember;

export default Service.extend({
  setFeed(topic){
    // Here we are using a template literal to put the correct topic in our url.
    const url = `http://rss2json.com/api.json?rss_url=https%3A%2F%2Fwww.dailydrip.com%2Ftopics%2F${topic}%2Ffeed.rss`;
    // Here we are setting a topic property on our service that we use to check if we need to fetch a new feed in the getFeed() function.
    this.set('topic', topic);

    let feedPromise = new RSVP.Promise((resolve, reject) =>{
      // Here we are setting up our request:
      var xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = function(){
        if (this.readyState === this.DONE) {
          // If we get a successful response we setup our data object
          if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            // Here is our data formatted as an object like we want
            let returbObj = { title: data.feed.title, feed: data.items};
            // This is where we resolve the promise
            resolve(returbObj);
          } else {
            // If we get a bad response we return an error here.
            reject(new Error(`Failed with status: [${this.status}]`));
          }
        }
      };
      // Here we are just sending our request.
      xhr.send();
    });
    // Here we are setting the property on our service to our promise object that we created above.
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
