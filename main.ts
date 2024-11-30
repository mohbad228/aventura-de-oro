controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mario,
    [img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e e e e d d e d . . . . . 
        . . e e d e d d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 . . e e e e . . . . 
        . . e e e e . . . . . . . . . . 
        `,img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e e e e d d e d . . . . . 
        . . e e d e d d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . e e e e . . 2 2 2 . . . . . 
        . . . . . . . . e e e e . . . . 
        `,img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e e e e d d e d . . . . . 
        . . e e d e d d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 . . 2 2 2 . . . . . 
        . . e e e e . . e e e e . . . . 
        `],
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        tiles.setTileAt(location, assets.tile`myTile2`)
        tiles.setWallAt(location, true)
        COIN = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(COIN, location)
        COIN.y += -15
        sprites.destroy(COIN, effects.confetti, 1000)
        info.changeScoreBy(5)
    } else {
        tiles.setWallAt(location, true)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile6`)) {
        tiles.setWallAt(location, false)
        tiles.setCurrentTilemap(tilemap`nivel11`)
        tiles.placeOnTile(sprite, tiles.getTileLocation(4, 0))
    } else {
        tiles.setWallAt(location, true)
    }
})
function enimigos (col: number, row: number, vx: number) {
    gomba = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f 2 2 2 2 1 1 f f . . . 
        . . f 1 1 2 2 2 2 1 1 1 1 f . . 
        . f 1 1 2 2 2 2 2 2 1 1 1 1 f . 
        . f 1 2 2 2 1 1 1 2 2 1 1 1 f . 
        f 2 2 2 2 1 1 1 1 1 2 2 2 2 2 f 
        f 2 2 2 2 1 1 1 1 1 2 2 1 1 2 f 
        f 1 2 2 2 1 1 1 1 1 2 1 1 1 1 f 
        f 1 1 2 2 2 1 1 1 2 2 1 1 1 1 f 
        f 1 1 2 2 2 2 2 2 2 2 2 1 1 2 f 
        f 1 2 f f f f f f f f f f 2 2 f 
        f f f d d f d d d d f d d f f f 
        . f d d d f d d d d f d d d f . 
        . f d d d d d d d d d d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(gomba, tiles.getTileLocation(col, row))
    gomba.ay = 300
    gomba.setBounceOnWall(true)
    gomba.setVelocity(50, vx)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mario,
    [img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e e e e d d e d . . . . . 
        . . e e d e d d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 . . e e e e . . . . 
        . . e e e e . . . . . . . . . . 
        `,img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e e e e d d e d . . . . . 
        . . e e d e d d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . e e e e . . 2 2 2 . . . . . 
        . . . . . . . . e e e e . . . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy += -200
        mario.setImage(img`
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e e d e d . . . . . 
            . . . e e d e d d e d . . . . . 
            . . . e e d d d d d d d d . . . 
            . . . e e e d d d e e e . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . e e 2 e e e . . . . . . 
            . . . e e e 2 e e 2 e e . . . . 
            . . e e e 2 2 2 2 2 e e . . . . 
            . . e e e 2 2 2 2 2 2 e . . . . 
            . . d d 2 2 d 2 2 d 2 d . . . . 
            . . . d 2 2 2 2 2 2 2 d . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . e e e e . . e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mario.setImage(img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e d e d . . . . . 
        . . . e e d e d d e d . . . . . 
        . . . e e d d d d d d d d . . . 
        . . . e e e d d d e e e . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 . . 2 2 2 . . . . . 
        . . e e e e . . e e e e . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.vy > 10) {
        sprites.destroy(otherSprite, effects.disintegrate, 500)
    } else {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        pause(1000)
    }
})
let gomba: Sprite = null
let COIN: Sprite = null
let mario: Sprite = null
info.setLife(3)
info.setScore(0)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`nivel2`)
mario = sprites.create(img`
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e e d e d . . . . . 
    . . . e e d e d d e d . . . . . 
    . . . e e d d d d d d d d . . . 
    . . . e e e d d d e e e . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . e e 2 e e e . . . . . . 
    . . . e e e 2 e e 2 e e . . . . 
    . . e e e 2 2 2 2 2 e e . . . . 
    . . e e e 2 2 2 2 2 2 e . . . . 
    . . d d 2 2 d 2 2 d 2 d . . . . 
    . . . d 2 2 2 2 2 2 2 d . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . 
    . . e e e e . . e e e e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
mario.ay = 300
tiles.placeOnTile(mario, tiles.getTileLocation(1, 13))
scene.cameraFollowSprite(mario)
enimigos(12, 11, 30)
enimigos(36, 11, 30)
game.onUpdateInterval(500, function () {
    if (info.score() > 45) {
        game.gameOver(true)
    }
    if (mario.tileKindAt(TileDirection.Right, sprites.dungeon.doorClosedNorth)) {
        tiles.setCurrentTilemap(tilemap`nivel2`)
    }
})
