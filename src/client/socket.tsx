import { io } from 'socket.io-client';
console.log("hello");
// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';
console.log("URL is "+URL);
export const socket = io(URL);
console.log("trying to connect");
socket.connect();
console.log("connection status: "+socket.connected);