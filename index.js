var GamePlayManager = {
    init:function(){},
    preload:function(){},
    create:function(){},
    update:function(){}
};
var game = new Phaser.Game(1136,640,Phaser.AUTO);
game.state.add('gameplay',GamePlayManager);