import { EventEmitter } from "node:events";

const task = new EventEmitter();

task.on("greet", (name) => {
    console.log(`hello, ${name}! welcome to the session.`);
});

task.on("exit", (reason) => {
    console.log(`session ending. reason: ${reason}`);
});

task.on("greet", () => {
    console.log("class started by sir");
});

task.on("exit", () => {
    console.log("class finished by sir");
});

task.emit("greet", "student");
task.emit("exit", "class completed");