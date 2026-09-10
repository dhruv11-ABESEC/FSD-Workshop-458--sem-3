import http from "http"; 

const userData = [{ 
    id: 101, 
    name: "Abc", 
    email: "abc@abes.ac.in"
}];

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
        res.end(JSON.stringify(userData)); 
    } 
    else if (url == "/create" && method == "POST") { 
        let body = "";

        req.on("data", (chunk) => { 
            body += chunk; 
        });

        req.on("end", () => { 
            const newData = JSON.parse(body);

            const newuserData = { 
                id: newData.id, 
                name: newData.name, 
                email: newData.email
            };

            userData.push(newuserData);

            res.end("User created successfully");
        });
    }
    else if (url == "/users" && method == "GET") { 
        res.end(JSON.stringify(userData)); 
    } 
    else if (url.startsWith("/users/") && method == "GET") { 

        const id = url.split("/")[2];

        const user = userData.find((u) => u.id == id);

        if (!user) {
            return res.end("User Not found");
        }

        res.end(JSON.stringify(user)); 
    } 
    else if (url.startsWith("/delete/") && method == "DELETE") { 

        const id = url.split("/")[2];

        const user = userData.findIndex((u) => u.id == id);

        if (user == -1) {
            return res.end("User Not found");
        }

        userData.splice(user, 1);

        res.end("Data deleted successfully");
    }
});

server.listen(4000, () => { 
    console.log("Server is running on port number 4000");
});