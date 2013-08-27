var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

app.use(express.cookieParser());
app.use(express.session({secret: 'Dhrumil'}));
		
server.listen(3000);
app.use(express.bodyParser());
app.set('views', __dirname + '/view');
app.set('view engine', 'jade'); 


app.get('/', function(req, res){
	res.render('home.jade',{title:"Hello Dhrumil "});
		
});
