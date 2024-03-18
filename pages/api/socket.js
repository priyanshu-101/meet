import { Server } from "socket.io";

const SocketHandler = (req, res) => {
    const server = res.socket.server;

    if (!server.io) {
        const io = new Server(server, {
            /* Optional configuration options */
        });

        io.on("connection", (socket) => {
            console.log("Socket connected: ", socket.id);
        });

        server.io = io;
        console.log("Socket server created");
    } else {
        console.log("Socket server already running");
    }

    res.end();
};

export default SocketHandler;
