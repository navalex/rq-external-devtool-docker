# ReactQuery Devtool

This image helps you to spin up an external Tanstack React Query devtool (to connect it to a mobile for exemple). It will run both a socket.io server + the devtool using Vite.

Here is available env variables:

- *SOCKET_PORT*: Port for the Socket.io server
- *DT_PORT*: Port for the Vite server to access your devtool
- *CORS_ORIGINS*: String to specify authorized url's for CORS in form of: "url1,url2,url3,..." (separate with coma without spaces). It automatically allows the Devtool url in the CORS policy.

Here is a docker-compose example:
```docker-compose
services:
    rqDevtools:
        image: navalex/rq_devtool:latest
        ports:
            - ${RQ_DEVTOOLS_PORT}:${RQ_DEVTOOLS_PORT}
            - ${RQ_DEVTOOLS_SOCKET_PORT}:${RQ_DEVTOOLS_SOCKET_PORT}
        environment:
            DT_PORT: ${RQ_DEVTOOLS_PORT}
            SOCKET_PORT: ${RQ_DEVTOOLS_SOCKET_PORT}
            SOCKET_CORS: "http://localhost:8102,http://localhost:5173"
```
