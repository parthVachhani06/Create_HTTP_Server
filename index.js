const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("Welcome to Home page...")
            break;
        case "/about":
            res.end("Welcome to About page...")
            break;
        case "/contect":
            res.end("Welcome to contect page...")
            break;
        default:
            res.end("sever not Found.....")
    }

 

})

server.listen(port, () => {
    console.log(`servert start ${port}`);
})


