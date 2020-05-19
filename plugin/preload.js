const redis = require('./external.js').redis
// const redis = libs.redis
// console.log(redis);
window.redis = redis;

utools.onPluginReady(() => {
    console.log('plugin ready!');
})

utools.onPluginOut(() => {
    console.log('plugin out')
})

utools.onPluginDetach(() => {
    console.log('插件被分离')
})

