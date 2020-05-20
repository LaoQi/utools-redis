let _is_browser = typeof window.utools === 'undefined';

if (_is_browser) {
    console.warn("Browser mock utools and external libary");
}

export const DEFAULT_HEIGHT = 600;

export const utools = _is_browser ? {
    _mock: true,
    _callback: {},
    setExpendHeight(height) {
        console.log('setExpendHeight ' + height);
    },
    onPluginEnter(callback) {
        this._callback.onPluginEnter = callback;
    },
    db: {
        put(doc) {
            console.log('db put ', doc);
            localStorage.setItem(doc._id, JSON.stringify(doc.data))
            return {
                _rev: (new Date()).toISOString(),
                ok: true,
                id: doc._id
            }
        },
        get(id) {
            console.log('db get', id);
            let item = localStorage.getItem(id);
            if (item) {
                return {_id: id, _rev: '', data: JSON.parse(item)}
            }
            return null;
        },
        remove(id) {
            console.log('db remove', id);
            localStorage.removeItem(id);
            return {id: id, ok: true, rev: ''};
        },
        allDocs(prefix) {
            let out = [];
            for(var i =0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                if (key.startsWith(prefix)) {
                    out.push({
                        _id: key, _rev: '', data: JSON.parse(localStorage.getItem(key))
                    })
                }
            }
            console.log('db get all', out);
            return out;
        }
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