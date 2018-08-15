const EventEmitter = require('events');

class Player extends EventEmitter{

}

let player = new Player();

player.once('play' , (track) => {
    console.log(`正在播放:《${track}》`);
})

player.emit('play' , '国家宝藏');
player.emit('play' , '国家宝藏1');