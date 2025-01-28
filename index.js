const {peerServer} = require('peer');
const express = require('express');
const app = express();
const port = process.env.port || Number(9000);
const peerServer = peerServer({
    port:port,
    path:'/myapp',
    ssl:{}
});
app.use('/myapp', peerServer);
app.listen(port, ()=>{
    console.log("server started");
})