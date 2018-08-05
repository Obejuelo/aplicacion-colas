//Comando para establecer la conexion
var socket = io();
var label = document.getElementById('lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('estadoActual', function(data) {
    console.log(data);
    label.innerHTML = data.estado;
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.innerHTML = siguienteTicket;
    });
});