![Build Status](https://travis-ci.org/baroquon/ember-daily-drip-feed.svg?branch=007.5_activity_complete)

# Ember-daily-drip-feed

This is an Ember addon that is a super simple RSS reader for the topic feeds from Daily Drip.

## Installation

```sh
ember install ember-daily-drip-feed
```
## Usage

Where you want to include the feed list just add:

```handlbars
{{daily-drip-feed topic='ember'}}
```

Presently the list of available topics for Daily Drip are:

* ember (default)
* elm
* sidekiq
* html-css
* elm-remote-meetup
* elixir
* elixir-remote-meetup

This addon supplies an unstyled `ul`.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
