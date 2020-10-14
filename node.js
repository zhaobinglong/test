// var fs = require("fs");
// var c
 
// function f(x) {
//     console.log(x)
// }
 
// function writeFile() {
//     fs.writeFile('input.txt', '我是通过fs.writeFile 写入文件的内容', function (err) {
//         if (!err) {
//             console.log("文件写入完毕!")
//             c = 1
//             f(c)
//         }
//     });
// }
 
// c = 0
// writeFile()
// f(c)

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : '154.8.226.223',
//   user     : 'root',
//   password : '3ZbvwYRUFc',
//   database : 'uniapi'
// });
 
// connection.connect();
 
// connection.query('SELECT * from user', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].avatarUrl);
// });

const EventEmitter = require('events');

class Player extends EventEmitter {}

var player = new Player()

player.on('play', (track) => {
    console.log(`正在播放《${track}》`)
})
player.emit('play', '黑凤凰')
player.emit('play', '复仇者联盟4')
