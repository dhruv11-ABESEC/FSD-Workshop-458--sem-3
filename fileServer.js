import fs from "node:fs/promises";
const filePath = "userData.txt";
async function createFile(content) {
    try {
        await fs.writeFile(filePath, content, "utf8");
        console.log("File created successfully!");
    } catch (err) {
        console.error("Error creating file:", err);
    }
}
async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log("File content:");
        console.log(data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}
async function updateFile(content) {
    try {
        await fs.appendFile(filePath, "\n" + content, "utf8");
        console.log("File updated successfully!");
    } catch (err) {
        console.error("Error updating file:", err);
    }
}
async function deleteFile() {
    try {
        await fs.unlink(filePath);
        console.log("File deleted successfully!");
    } catch (err) {
        console.error("Error deleting file:", err);
    }
}

await createFile("Hello, this is my user data.");

await readFile();

await updateFile("This is the updated data.");

await readFile();

await deleteFile();