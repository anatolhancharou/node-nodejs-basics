import { readdir } from 'node:fs/promises';
import { getPath } from '../services.js';
import { errorMessage } from './constants.js';

const sourceFolderPath = getPath(import.meta.url, 'files');

const list = async () => {
    try {
        const sourceFolderFiles = await readdir(sourceFolderPath);
        console.log(sourceFolderFiles);
    } catch {
        throw new Error(errorMessage);
    }
};

await list();
