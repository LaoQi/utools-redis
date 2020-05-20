import { utools } from './utils'

const ConnectionPrefix = 'Connection/'

function getAllConnections() {
    return (utools.db.allDocs(ConnectionPrefix) || []).map((item) => item.data);
}

function removeConnection(name) {
    return utools.db.remove(ConnectionPrefix + name);
}

function putConnection(options) {
    return utools.db.put({
        _id: ConnectionPrefix + options.name,
        data: options
    })
}

export default {
    getAllConnections,
    removeConnection,
    putConnection
}