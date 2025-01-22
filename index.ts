import { Server } from "hyper-express";
import path from "path";
import config from "./config";

const app = new Server();

// Serve static files from the 'public' directory
app.get("/", (req, res) => {
    return res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.get("/favicon.png", (req, res) => {
    return res.sendFile(path.join(process.cwd(), 'public', 'favicon.png'));
});

app.get("/style.css", (req, res) => {
    return res.sendFile(path.join(process.cwd(), 'public', 'style.css'));
});

// Listen on the specified port
app.listen(config.port).then(() => {
    console.log(`Server is running on port ${config.port}`);
}).catch((err) => {
    console.error("Server failed to start:", err);
});