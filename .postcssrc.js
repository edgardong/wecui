// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-salad": require('./salad.config.json'),
    "postcss-url": {},
    "precss": {}    
  }
}
