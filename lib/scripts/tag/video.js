module.exports = {
   addVideo
}

// 定义函数
function addVideo (hexo, args) {
    // 判定是否有效标签
    if (args[0] == "") {
        return;
    }
    // 定义HTML
    const player_text = `<video id="player" playsinline controls>`
    + `<source src="`
    + args[0]
    +`" type="video/`
    + if (args.length == 2) {
        // 自行定义类型
        args[1]
    } else {
        // 自动捕获后缀作为类型
        args[0].substring(args[0].lastIndexOf('.')+1)
    }
    + `" />;
    player_text += `</video>`;
    
    return player_text;
}