import { cp } from 'node:fs/promises';
import { getPath } from '../services.js';
import { errorMessage } from './constants.js';

const sourceFolderPath = getPath(import.meta.url, 'files');
const destinationFolderPath = getPath(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        await cp(sourceFolderPath, destinationFolderPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch {
        throw new Error(errorMessage);
    }
};

await copy();
