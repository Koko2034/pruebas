module.exports = function(config) {
    config.set({
      files: [
        {pattern: './src/test/*js', included: true, mutated:false},
        {pattern: './src/model/**/*js', included: true, mutated:true},
        {pattern: './src/services/**/*js', included: true, mutated:true},
        {pattern: './src/*.js', included: true, mutated:true}
      ],
      testRunner: "karma",
      mutator: "es5",
      transpilers: [],
      reporter: ["clear-text", "progress"],
      testFramework: "jasmine",
      coverageAnalysis: "perTest",
      karmaConfigFile: "karma.conf.js",
    });
  };