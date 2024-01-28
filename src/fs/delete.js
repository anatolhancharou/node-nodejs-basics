import { rm } from 'node:fs/promises';
import { getPath } from '../services.js';
import { errorMessage } from './constants.js';

const fileToRemovePath = getPath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(fileToRemovePath);
    } catch {
        throw new Error(errorMessage);
    }
};

await remove();
