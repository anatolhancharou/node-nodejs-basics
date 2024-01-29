import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getPath } from '../services.js';

const fileToReadPath = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    const readStream = createReadStream(fileToReadPath);
    await pipeline(readStream, process.stdout);
};

await read();
