function set_Map (Map: number) {
    Maps = [tilemap`level8`, tilemap`level9`]
    tiles.setCurrentTilemap(Maps[Map - 1])
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    set_Map(2)
})
let Maps: tiles.TileMapData[] = []
set_Map(1)
let mySprite = sprites.create(img`
    1 1 1 1 . . 6 6 6 6 . . 1 1 1 1 
    1 . . 1 . . 6 . . 6 . . 1 . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    6 6 . . . . . . . . . . . . 6 6 
    6 . . . . . . 6 6 . . . . . . 6 
    6 . . . . . . 6 6 . . . . . . 6 
    6 6 . . . . . . . . . . . . 6 6 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . 1 . . 6 . . 6 . . 1 . . 1 
    1 1 1 1 . . 6 6 6 6 . . 1 1 1 1 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
grid.snap(mySprite)
grid.moveWithButtons(mySprite)
info.setScore(500)
