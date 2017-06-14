var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameDiv');


game.state.add('preload', preloadState);
game.state.add('game', gameState);

game.state.start('preload')
