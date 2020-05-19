let _is_browser = typeof window.utools === 'undefined';

if (_is_browser) {
    console.warn("Browser mock utools and external libary");
}

export const utools = _is_browser ? {
    _mock: true,
    _callback: {},
    setExpendHeight(height) {
        console.log('setExpendHeight ' + height);
    },
    onPluginEnter(callback) {
        this._callback.onPluginEnter = callback;
    },
    testFeature(code) {
        this._callback.onPluginEnter({
            'code': code,
            'type': 'text',
            'payload': code
        })
    }
} : window.utools;

if (_is_browser) {
    window.utools = utools;
}

export const redis = _is_browser ? {
    _mock: true,
} : window.redis;


export default {
    utools: utools,
    redis: redis
} 