import { readFile } from 'node:fs/promises';
import { getPath } from '../services.js';
import { errorMessage } from './constants.js';

const fileToReadPath = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const contents = await readFile(fileToReadPath, { encoding: 'utf-8' });
        console.log(contents);
    } catch {
        throw new Error(errorMessage);
    }
};

await read();
