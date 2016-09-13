import { moduleFor, test } from 'ember-qunit';

moduleFor('service:feed', 'Unit | Service | feed', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('If we already have a results in our feed we return then without calling get setFeed Function', function(assert) {
  const service = this.subject();

  service.set('results', { title: 'Service Title', feed: [1, 2, 3]});
  service.set('topic', 'ember');

  service.set('setFeed', () => {
    return { title: 'Wrong Title', feed: ['wrong', 'feed' ] };
  });

  let results = service.getFeed('ember');

  assert.equal(results.title, 'Service Title');
  assert.notEqual(results.feed.indexOf(1), -1);
  assert.equal(results.feed.length, 3);
});

test('If we do not already have a results in our feed we call a setFeed Function which returns them', function(assert) {
  const service = this.subject();

  service.set('topic', 'ember');

  service.set('setFeed', () => {
    return { title: 'Right Feed', feed: ['right', 'feed' ] };
  });

  let results = service.getFeed('ember');

  assert.equal(results.title, 'Right Feed');
  assert.notEqual(results.feed.indexOf('right'), -1);
  assert.equal(results.feed.length, 2);
});

test('Even if we already have a results in our feed, if we pass in a different feed we still call a setFeed Function which returns the new feed', function(assert) {
  const service = this.subject();

  service.set('results', { title: 'Service Title', feed: [1, 2, 3]});
  service.set('topic', 'ember');

  service.set('setFeed', () => {
    return { title: 'Right Feed', feed: ['right', 'feed' ] };
  });

  let results = service.getFeed('elm');

  assert.equal(results.title, 'Right Feed');
  assert.notEqual(results.feed.indexOf('right'), -1);
  assert.equal(results.feed.length, 2);
});
