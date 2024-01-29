import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getPath } from '../services.js';

const fileToWritePath = getPath(import.meta.url, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(fileToWritePath);
    await pipeline(process.stdin, writeStream);
};

await write();
