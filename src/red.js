import { redis } from './utils'

/**
 * test redis connection
 * @param {host, port, password} params 
 */
function testRedisConnection(params, callback) {
    const client = redis.createClient({
        host: params.host,
        port: params.port
    })
    if (params.password) {
        client.auth(params.password)
    }
    client.ping((err, reply) => {
        if (err) {
            callback(err.toString());
        } else {
            callback(reply);
        }
    });
}


export default {
    testRedisConnection
}