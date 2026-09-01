import https from "https";
import fs from "fs";

const userdata = [
    {
        id: 1,
        name: "cm",
        email: "c.m@abes.ac.in"
    }
];

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options, (req, res) => {

    const url = req.url;
    const method = req.method;

    // READ
    if (url == "/data" && method == "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify(userdata));
    }

    // CREATE
    else if (url == "/create" && method == "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const newdata = JSON.parse(body);

            const newUserdata = {
                id: newdata.id,
                name: newdata.name,
                email: newdata.email
            };

            userdata.push(newUserdata);

            res.statusCode = 201;
            res.end("Data created successfully");
        });
    }

    // UPDATE
    else if (url == "/update" && method == "PUT") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const updatedata = JSON.parse(body);

            const user = userdata.find(
                (user) => user.id == updatedata.id
            );

            if (user) {

                user.name = updatedata.name;
                user.email = updatedata.email;

                res.statusCode = 200;
                res.end("Data updated successfully");

            } else {

                res.statusCode = 404;
                res.end("User not found");
            }
        });
    }

    // DELETE
    else if (url == "/delete" && method == "DELETE") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const deletedata = JSON.parse(body);

            const index = userdata.findIndex(
                (user) => user.id == deletedata.id
            );

            if (index != -1) {

                userdata.splice(index, 1);

                res.statusCode = 200;
                res.end("Data deleted successfully");

            } else {

                res.statusCode = 404;
                res.end("User not found");
            }
        });
    }

    // DEFAULT
    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3005, () => {
    console.log("HTTPS server is running on port 3005");
});