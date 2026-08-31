import http from "http";
const userdata = [
    {
        id: 1,
        name: "cm",
        email: "c.m@abes.ac.in",
    },
];
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == "/msg" && method == "GET") {
        res.end("This is welcome message from server");
    }

    else if (url == "/sys" && method == "GET") {
        res.end("This is system information");
    }

    else if (url == "/data" && method == "GET") {
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(userdata));
    }

    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3005, () => {
    console.log("Server is running on port number 3005");
});