require('dotenv').config()
import { httpServer, websocketServer } from './servers';

const httpPort =  Number(process.env.HTTP_PORT) || 8080;
const httpHost =  process.env.HTTP_HOST || '0.0.0.0';
const wsPort = Number(process.env.WS_HOST) || 5000;
const wsHost = process.env.WS_HOST || '0.0.0.0';

httpServer.listen(httpPort, httpHost, () => {
    // TODO: add event emitter?
    console.log(`App is now running on http://${httpHost}:${httpPort}`);
});


websocketServer.listen(wsPort, wsHost, () => {
    // TODO: add event emitter?
    console.log(`Websocket Server is now running on http://${wsHost}:${wsPort}`)
});
