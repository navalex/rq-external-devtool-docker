import React from "react"
import ReactDOM from "react-dom/client"
import { ExternalDevTools } from "react-query-external-dash"

const socketPort = __SOCKET_PORT__

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ExternalDevTools
            socketURL={`http://localhost:${socketPort}`}
            query={{
                clientType: "server",
                username: "Admin",
                userType: "admin",
            }}
        />
    </React.StrictMode>,
)