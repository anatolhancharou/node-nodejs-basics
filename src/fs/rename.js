import { rename as fsRename } from 'node:fs/promises';
import { getPath } from '../services.js';
import { errorMessage } from './constants.js';

const currentFilePath = getPath(import.meta.url, 'files', 'wrongFilename.txt');
const renamedFilePath = getPath(import.meta.url, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fsRename(currentFilePath, renamedFilePath);
    } catch {
        throw new Error(errorMessage);
    }
};

await rename();
