$(() => {
    var socket = io();
    $("form").submit(() => {
		var nick = ($("#nick").val() === "") ? "Anonymous" : $("#nick").val();
		var msg = $("#msg").val();
		var message = nick + ": " + msg;
		socket.emit("chat message", message);
		$("#msg").val("");
		return false;
    });
    socket.on("chat message", (msg) => {
		$("#messages").append($("<li>").text(msg));
		window.scrollTo(0, document.body.scrollHeight);
    });
});