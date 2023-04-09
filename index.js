var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
const { execSync } = require("child_process");

execSync(`chmod +x ./start.sh && ./start.sh`,{
	cwd: './'
})
