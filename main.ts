namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile2`, function (sprite, location) {
    sprite.setVelocity(0 - sprite.vx, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (turn == 0) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ..........ccc...........
            .........cccc...........
            .....ccccccc..ccc.......
            ...cc555555cccccc.......
            ..c5555555555bcc........
            .c555555555555b..cc.....
            c555551ff555555bccc.....
            c55d55ff55555555bc......
            c5555555555555555b......
            .cbb31bb5555dd555b.cc...
            .c5333b555ddddd55dccc...
            .c533b55ddddddddddb.....
            .c5555dddbb55bdddddccc..
            ..ccccbbbb555bdddddccc..
            ...cdcbc5555bddddddcc...
            ....ccbc55bc5ddddddbcccc
            .....cbbcc5555dddddddddc
            .....ccbbb555ddbddddddc.
            .....cdcbc55ddbbbdddcc..
            ...ccdddccddddbcbbcc....
            ...ccccccd555ddccc......
            ........cccccccc........
            `, SpriteKind.Projectile)
        mySprite2.setVelocity(-200, 0)
        mySprite2.setPosition(mySprite.x, mySprite.y)
    } else {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb555555ff155555c
            ......cb55555555ff55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb13bbc.
            ...cccd55ddddd555b3335c.
            .....bdddddddddd55b335c.
            ..cccdddddb55bbddd5555c.
            ..cccdddddb555bbbbcccc..
            ...ccddddddb5555cbcdc...
            ccccbdddddd5cb55cbcc....
            cddddddddd5555ccbbc.....
            .cddddddbdd555bbbcc.....
            ..ccdddbbbdd55cbcdc.....
            ....ccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `, SpriteKind.Projectile)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.setVelocity(200, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        3 f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
    turn = 0
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(false, "imagine")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setGameOverMessage(true, "gg ig")
    game.setGameOverEffect(true, effects.hearts)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `)
    turn = 1
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "bruhv how")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.confetti, 500)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
let mySprite2: Sprite = null
let turn = 0
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`plat`)
mySprite.ay = 300
mySprite.sayText("have fun!", 2000, true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 4))
info.setLife(5)
info.startCountdown(180)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    mySprite3 = sprites.create(img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(mySprite3, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    mySprite4 = sprites.create(img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite4, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    mySprite4.setVelocity(50, 0)
}
