const fs = require('fs')
const path = require('path')

//正则表达式     \s空白字符  \S非空白字符  *任意次数
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取文件  
fs.readFile(path.join(__dirname, '/例.html'), 'utf8', (err, dataStr) => {
    if (err) {
        return console.log('读取失败' + err.message)
    }
    // console.log('成功' + path.join(__dirname, '/index.html'))
    // console.log(dataStr)
    resoleCSS(dataStr)
    resoleJS(dataStr)
    resolehtml(dataStr)
})

// 处理CSS样式
function resoleCSS(htmlStr) {
    // console.log(htmlStr)
    // exec正则提取
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1)

    // 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // console.log(newCSS)

    // 将替换后的样式写入到新的css文件
    fs.writeFile(path.join(__dirname, './index.css'), newCSS, (err) => {
        if (err) return console.log('失败', err.message)
        console.log('style成功')
    })
}

// 处理JS脚本
function resoleJS(htmlSTr) {
    const r2 = regScript.exec(htmlSTr)
    // 替换
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, 'index.js'), newJS, err => {
        if (err) return console.log('失败' + err.message)
        console.log('js成功')
    })


}

//处理html结构
function resolehtml(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './index.html'), newHTML, err => {
        if (err) return console.log('失败' + err.message)
        console.log('html成功')
    })
}