const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
  // Add YAML data support
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));

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
