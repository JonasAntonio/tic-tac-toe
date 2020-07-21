let Client = {}

Client.socket = io.connect()

Client.sendTest = ()=>{
    console.log("test sent")
    Client.socket.emit('test')
}

Client.askNewPlayer = ()=>{
    Client.socket.emit('newplayer')
}

Client.PlayerMove = (box_index) => {
    Client.socket.emit('playermove', {box_index:box_index, board_clickable_areas})
}