var express = require("express"),
	app = express();
	http = require("http").createServer(app),
	io = require("socket.io")(http),
	bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("index");
});

io.on("connection", (socket) => {
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
	});
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Anonymous Chatroom is running on port ${ PORT }`);
});