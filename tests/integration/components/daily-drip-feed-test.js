import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('daily-drip-feed', 'Integration | Component | daily drip feed', {
  integration: true
});

test('it renders the title and a list with the appropriate number of items', function(assert) {
  let obj1 = {
    title: '[Elm 021.1] Editing Users and a Week of Refactoring',
    link: 'https://www.dailydrip.com/topics/elm/drips/editing-users-and-a-week-of-refactoring'
  };
  let obj2 = {
    title: '[Elm 020.5] Elm Weekly Drip #20 and Exercise: Edit Users',
    link: 'https://www.dailydrip.com/topics/elm/drips/elm-weekly-drip-20-and-exercise-edit-users'
  };
  let obj3 = {
    title: '[Elm 020.4] Finishing a CRUD Resource with a Sortable Table in elm-mdl',
    link: 'https://www.dailydrip.com/topics/elm/drips/finishing-a-crud-resource-with-a-sortable-table-in-elm-mdl'
  };
  let results = { title: 'title', feed: [obj1, obj2, obj3]};
  this.set('results', results);
  this.render(hbs`{{daily-drip-feed results=results}}`);

  assert.equal(this.$('[data-feed-header]').text().trim(), 'title');
  assert.equal(this.$('[data-feed-list] > li').length, 3);
  assert.equal(this.$('[data-feed-list] > li:first-child a').text().trim(), obj1.title);
  assert.equal(this.$('[data-feed-list] > li:first-child a').attr('href'), obj1.link);
});
