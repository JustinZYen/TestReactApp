import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const app = express();
const server = createServer(app);
// Set up associated files
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/', (_, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
});
app.use(express.static(join(__dirname, '../dist')));
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});