utools.onPluginReady(() => {
    console.log('plugin ready!')
})

window.exports = {
    "redis": { // 注意：键对应的是plugin.json中的features.code
        mode: "list",  // 列表模式
        args: {
            // 进入插件时调用（可选）
            enter: (action, callbackSetList) => {
                // 如果进入插件就要显示列表数据
                callbackSetList([
                    {
                        title: '新建连接',
                        description: '新建一个Redis连接',
                        icon: 'redis-logo.png' // 图标(可选)
                    }
                ])
            },
            // 子输入框内容变化时被调用 可选 (未设置则无搜索)
            search: (action, searchWord, callbackSetList) => {
                // 获取一些数据
                // 执行 callbackSetList 显示出来
                callbackSetList([
                    {
                        title: '这是标题',
                        description: '这是描述',
                        // icon:'' // 图标，
                        url: 'https://yuanliao.info',
                        other: 'xxx'
                    }
                ])
            },
            // 用户选择列表中某个条目时被调用
            select: (action, itemData, callbackSetList) => {
                // window.utools.hideMainWindow()
                // const url = itemData.url
                // require('electron').shell.openExternal(url)
                // window.utools.outPlugin()
                // utools.ubrowser.goto('https://cn.bing.com')
                //     .value('#sb_form_q', 'uTools')
                //     .click('#sb_form_go')
                //     .run({ width: 1000, height: 600 })
                // utools.redirect('redis-create-link')
                console.log(action, itemData, callbackSetList)
            },
            // 子输入框为空时的占位符，默认为字符串"搜索"
            placeholder: "搜索"
        }
    },
    "redis-create-link": {
        mode: "doc",  // 列表模式
        args: {
            // 索引集合
            // indexes: require('./indexes.json')
            indexes: [
                {
                    t: '这是标题',
                    d: '这是描述',
                    p: 'lib/test.html' //页面, 只能是相对路径
                }
            ],
            // 子输入框为空时的占位符，默认为字符串"搜索"
            placeholder: "搜索"
        }
    }
}