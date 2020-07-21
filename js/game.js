const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 600,
        height: 800,
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
})

let board_clickable_areas = {
    0: {
        "x": 170,
        "y": 270,
        "clicked": false,
        "player": null
    },
    1: {
        "x": 300,
        "y": 270,
        "clicked": false,
        "player": null
    },
    2: {
        "x": 430,
        "y": 270,
        "clicked": false,
        "player": null
    },
    3: {
        "x": 170,
        "y": 400,
        "clicked": false,
        "player": null
    },
    4: {
        "x": 300,
        "y": 400,
        "clicked": false,
        "player": null
    },
    5: {
        "x": 430,
        "y": 400,
        "clicked": false,
        "player": null
    },
    6: {
        "x": 170,
        "y": 530,
        "clicked": false,
        "player": null
    },
    7: {
        "x": 300,
        "y": 530,
        "clicked": false,
        "player": null
    },
    8: {
        "x": 430,
        "y": 530,
        "clicked": false,
        "player": null
    }
}

function preload () {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#b8cad4");
    this.load.image('board', 'assets/board.png')
    this.load.image('clickable_area', 'assets/clickable_area.png')
    this.load.image('X', 'assets/X.png')
    this.load.image('O', 'assets/O.png')
}

function create () {
    Client.askNewPlayer()
    
    this.add.image(300, 400, 'board')
    let turn_text = this.add.text(200, 50, 'Sua vez!', {'color': '#000000', 'fontSize': 50})
    // turn_text.setText('new text')

    for(let box_index in board_clickable_areas) {
        let x_pos = board_clickable_areas[box_index].x
        let y_pos = board_clickable_areas[box_index].y
        let clickable_area = this.add.image(x_pos, y_pos, 'clickable_area')
        .setInteractive({useHandCursor: true})
        .on('pointerdown',()=>{
            if(!board_clickable_areas[box_index].clicked) {
                this.add.image(board_clickable_areas[box_index].x, board_clickable_areas[box_index].y, 'X')
                clickable_area.disableInteractive()
                board_clickable_areas[box_index].clicked = true
                // board_clickable_areas[box_index].player = true
                Client.PlayerMove(box_index, board_clickable_areas)
            }
        })
    }
}

// function playerMove(box_index, instance) {
//     Client.PlayerMove(box_index)
//     instance.add.image(board_clickable_areas[box_index].x, board_clickable_areas[box_index].y, 'O')
    
// }

function update () {

}