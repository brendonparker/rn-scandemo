let blacklist = require('metro-bundler/src/blacklist');

module.exports = {
    getTransformModulePath() {
      return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
      return ['ts', 'tsx'];
    },
    getBlacklistRE() {
      return blacklist([
        // Ignore local `.sample.js` files.
        /.*\.sample\.js$/,
  
        // Ignore IntelliJ directories
        /.*\.idea\/.*/,
        // ignore git directories
        /.*\.git\/.*/,
        // Ignore android directories
        /.*\/app\/build\/.*/
  
        // Add more regexes here for paths which should be blacklisted from the packager.
      ]);
    }
}
