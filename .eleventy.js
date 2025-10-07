const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function(eleventyConfig) {
  // Add YAML data support
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));

  // Copy CSS to output
  eleventyConfig.addPassthroughCopy('src/css');

  // Set input and output directories
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    }
  };
};
