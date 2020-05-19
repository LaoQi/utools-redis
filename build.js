const Bundler = require('parcel-bundler');
const Path = require('path');

// external.js
(new Bundler(Path.join(__dirname, './external.js'), {
    outDir: './plugin/', // 将生成的文件放入输出目录下，默认为 dist
    outFile: 'external.js', // 输出文件的名称
    cache: true, // 启用或禁用缓存，默认为 true
    cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
    contentHash: false, // 禁止文件名hash
    global: 'moduleName', // 在当前名字模块以UMD模式导出，默认禁止。
    minify: true, // 压缩文件，当 process.env.NODE_ENV === 'production' 时，会启用
    target: 'node', // browser/node/electron, 默认为 browser
    bundleNodeModules: true, // 当package.json的'target'设置'node' or 'electron'时，相应的依赖不会加入bundle中。设置true将被包含。
    sourceMaps: false,
    logLevel: 3,
    watch: false,
    hmr: false,
    detailedReport: false // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
})).bundle().then(
    // app.js
    () => {
        (new Bundler(Path.join(__dirname, './src/app.js'), {
            outDir: './plugin/', // 将生成的文件放入输出目录下，默认为 dist
            outFile: 'app.js', // 输出文件的名称
            publicUrl: '/', // 静态资源的 url ，默认为 '/'
            watch: false, // 是否需要监听文件并在发生改变时重新编译它们，默认为 process.env.NODE_ENV !== 'production'
            cache: true, // 启用或禁用缓存，默认为 true
            cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
            contentHash: false, // 禁止文件名hash
            global: 'moduleName', // 在当前名字模块以UMD模式导出，默认禁止。
            minify: true, // 压缩文件，当 process.env.NODE_ENV === 'production' 时，会启用
            scopeHoist: false, // 打开实验性的scope hoisting/tree shaking用来缩小生产环境的包。
            target: 'browser', // browser/node/electron, 默认为 browser
            bundleNodeModules: true, // 当package.json的'target'设置'node' or 'electron'时，相应的依赖不会加入bundle中。设置true将被包含。
            sourceMaps: false,
            logLevel: 3,
            hmr: false,
            detailedReport: false // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
        })).bundle();
    }
);
