const laabr = require('laabr');

const options = {
  formats: {onPostStart: ':time :start :level :message'},
  tokens: {start: () => '[start]'},
  indent: 0
};

const config = [
  {
    plugin: laabr,
    options: options
  }
];

module.exports = {plugin: config};
